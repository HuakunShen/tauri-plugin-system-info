use crate::{model::Process, utils::SysInfoState};

#[tauri::command]
pub fn processes(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Process>, String> {
    Ok(state.sysinfo.lock().unwrap().processes())
}
