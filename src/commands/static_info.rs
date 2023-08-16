use crate::{model::StaticInfo, utils::SysInfoState};

#[tauri::command]
pub fn hostname(state: tauri::State<'_, SysInfoState>) -> Result<Option<String>, String> {
    Ok(state.sysinfo.lock().unwrap().hostname())
}

#[tauri::command]
pub fn name(state: tauri::State<'_, SysInfoState>) -> Result<Option<String>, String> {
    Ok(state.sysinfo.lock().unwrap().name())
}

#[tauri::command]
pub fn kernel_version(state: tauri::State<'_, SysInfoState>) -> Result<Option<String>, String> {
    Ok(state.sysinfo.lock().unwrap().kernel_version())
}

#[tauri::command]
pub fn os_version(state: tauri::State<'_, SysInfoState>) -> Result<Option<String>, String> {
    Ok(state.sysinfo.lock().unwrap().os_version())
}

#[tauri::command]
pub fn static_info(state: tauri::State<'_, SysInfoState>) -> Result<StaticInfo, String> {
    let hostname = state.sysinfo.lock().unwrap().hostname();
    let kernel_version = state.sysinfo.lock().unwrap().kernel_version();
    let os_version = state.sysinfo.lock().unwrap().os_version();
    let name = state.sysinfo.lock().unwrap().name();
    Ok(StaticInfo {
        hostname,
        kernel_version,
        os_version,
        name,
    })
}
