use crate::{model::Component, utils::SysInfoState};

#[tauri::command]
pub fn components(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Component>, String> {
    Ok(state.sysinfo.lock().unwrap().components())
}
