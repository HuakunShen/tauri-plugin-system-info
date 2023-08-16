use crate::{model::MemoryInfo, utils::SysInfoState};

#[tauri::command]
pub fn total_memory(state: tauri::State<'_, SysInfoState>) -> Result<u64, String> {
    Ok(state.sysinfo.lock().unwrap().total_memory())
}

#[tauri::command]
pub fn used_memory(state: tauri::State<'_, SysInfoState>) -> Result<u64, String> {
    Ok(state.sysinfo.lock().unwrap().total_memory())
}

#[tauri::command]
pub fn total_swap(state: tauri::State<'_, SysInfoState>) -> Result<u64, String> {
    Ok(state.sysinfo.lock().unwrap().total_memory())
}

#[tauri::command]
pub fn used_swap(state: tauri::State<'_, SysInfoState>) -> Result<u64, String> {
    Ok(state.sysinfo.lock().unwrap().total_memory())
}

#[tauri::command]
pub fn memory_info(state: tauri::State<'_, SysInfoState>) -> Result<MemoryInfo, String> {
    let total_memory = state.sysinfo.lock().unwrap().total_memory();
    let used_memory = state.sysinfo.lock().unwrap().used_memory();
    let total_swap = state.sysinfo.lock().unwrap().total_swap();
    let used_swap = state.sysinfo.lock().unwrap().used_swap();
    Ok(MemoryInfo {
        total_memory,
        used_memory,
        total_swap,
        used_swap,
    })
}
