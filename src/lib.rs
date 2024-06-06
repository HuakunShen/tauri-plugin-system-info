use tauri::{
    plugin::{Builder, TauriPlugin},
    Manager, Runtime,
};

use std::{collections::HashMap, sync::Mutex};

mod commands;
#[cfg(desktop)]
mod desktop;
mod error;
#[cfg(mobile)]
mod mobile;
mod model;
mod utils;

pub use error::{Error, Result};

pub use utils::SysInfoState;

#[cfg(desktop)]
use desktop::SysInfo;
#[cfg(mobile)]
use mobile::SysInfo;

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
        ])
        .setup(|app, api| {
            #[cfg(mobile)]
            let system_info = mobile::init(app, api)?;
            #[cfg(desktop)]
            // let system_info = desktop::init(app, api)?;
            // app.manage(system_info);
            app.manage(SysInfoState::default());

            Ok(())
        })
        .build()
}
