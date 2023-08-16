use crate::{model::Disk, utils::SysInfoState};

#[tauri::command]
pub fn disks(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Disk>, String> {
    Ok(state.sysinfo.lock().unwrap().disks())
}
