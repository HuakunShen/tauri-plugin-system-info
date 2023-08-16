use crate::{model::Network, utils::SysInfoState};

#[tauri::command]
pub fn networks(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Network>, String> {
    Ok(state.sysinfo.lock().unwrap().networks())
}
