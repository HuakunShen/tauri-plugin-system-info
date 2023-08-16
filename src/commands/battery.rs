use crate::{
    model::{Battery, Component},
    utils::SysInfoState,
};

#[tauri::command]
pub fn batteries(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Battery>, String> {
    Ok(state
        .sysinfo
        .lock()
        .unwrap()
        .batteries()
        .map_err(|e| e.to_string())?)
}
