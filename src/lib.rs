pub mod commands;
pub mod model;
pub mod utils;

use model::DiskKind;
use serde::{ser::Serializer, Serialize};
use tauri::{
    plugin::{Builder, TauriPlugin},
    Manager, Runtime,
};

type Result<T> = std::result::Result<T, Error>;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),
}

impl Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> std::result::Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

#[tauri::command]
async fn debug() -> Result<DiskKind> {
    Ok(DiskKind::Unknown(16))
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("system-info")
        .invoke_handler(tauri::generate_handler![
            commands::all_sys_info,
            // memory
            commands::memory::total_memory,
            commands::memory::used_memory,
            commands::memory::total_swap,
            commands::memory::used_swap,
            commands::memory::memory_info,
            // static info
            commands::static_info::hostname,
            commands::static_info::name,
            commands::static_info::kernel_version,
            commands::static_info::os_version,
            commands::static_info::static_info,
            // componenets
            commands::component::components,
            // cpu
            commands::cpu::cpus,
            commands::cpu::cpu_count,
            commands::cpu::cpu_info,
            // disk
            commands::disk::disks,
            // networks
            commands::network::networks,
            // processes
            commands::process::processes,
            // refresh
            commands::refresh::refresh_all,
            commands::refresh::refresh_memory,
            commands::refresh::refresh_cpu,
            commands::refresh::refresh_processes,
            commands::battery::batteries,
            debug
        ])
        .setup(|app| {
            app.manage(utils::SysInfoState::default());
            Ok(())
        })
        .build()
}
