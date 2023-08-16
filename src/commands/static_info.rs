use crate::utils::{get_sys, SysInfo};
use sysinfo::{NetworkExt, NetworksExt, ProcessExt, System, SystemExt};

#[tauri::command]
pub fn hostname(state: tauri::State<'_, SysInfo>) -> Result<Option<String>, String> {
    Ok(state.hostname())
}

#[tauri::command]
pub fn name(state: tauri::State<'_, SysInfo>) -> Result<Option<String>, String> {
    Ok(state.name())
}

#[tauri::command]
pub fn kernel_version(state: tauri::State<'_, SysInfo>) -> Result<Option<String>, String> {
    Ok(state.kernel_version())
}

#[tauri::command]
pub fn os_version(state: tauri::State<'_, SysInfo>) -> Result<Option<String>, String> {
    Ok(state.os_version())
}
