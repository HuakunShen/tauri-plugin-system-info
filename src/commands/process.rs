use crate::{utils::SysInfoState, model::Process};

#[tauri::command]
pub fn processes(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Process>, String> {
    Ok(state.sysinfo.lock().unwrap().processes())
}
