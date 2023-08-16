pub mod commands;
pub mod model;
pub mod utils;

use serde::{ser::Serializer, Serialize};
use tauri::{
    command,
    plugin::{Builder, TauriPlugin},
    AppHandle, Manager, Runtime, State, Window,
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

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("system-info")
        .invoke_handler(tauri::generate_handler![
            commands::all_sys_info,
            commands::memory::total_memory,
            commands::memory::used_memory,
            commands::memory::total_swap,
            commands::memory::used_swap,
            commands::static_info::hostname,
            commands::static_info::name,
            commands::static_info::kernel_version,
            commands::static_info::os_version,
        ])
        .setup(|app| {
            app.manage(utils::SysInfo::default());
            Ok(())
        })
        .build()
}
