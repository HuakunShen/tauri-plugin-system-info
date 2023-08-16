use crate::utils::SysInfo;

#[tauri::command]
pub fn total_memory(state: tauri::State<'_, SysInfo>) -> Result<u64, String> {
    Ok(state.total_memory())
}
#[tauri::command]
pub fn used_memory(state: tauri::State<'_, SysInfo>) -> Result<u64, String> {
    Ok(state.total_memory())
}
#[tauri::command]
pub fn total_swap(state: tauri::State<'_, SysInfo>) -> Result<u64, String> {
    Ok(state.total_memory())
}
#[tauri::command]
pub fn used_swap(state: tauri::State<'_, SysInfo>) -> Result<u64, String> {
    Ok(state.total_memory())
}
