use crate::{model::Battery, utils::SysInfoState};

#[tauri::command]
pub fn batteries(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Battery>, String> {
    let ret = state
        .sysinfo
        .lock()
        .unwrap()
        .batteries()
        .map_err(|e| e.to_string())?;
    Ok(ret)
}
