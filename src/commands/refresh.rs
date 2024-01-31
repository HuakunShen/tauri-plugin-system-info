use sysinfo::Pid;

use crate::utils::SysInfoState;

#[tauri::command]
pub fn refresh_all(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_all();
    Ok(())
}

#[tauri::command]
pub fn refresh_memory(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_memory();
    Ok(())
}

#[tauri::command]
pub fn refresh_cpu(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_cpu();
    Ok(())
}

#[tauri::command]
pub fn refresh_processes(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_processes();
    Ok(())
}

#[tauri::command]
pub fn refresh_process(pid: u32, state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_process(Pid::from(pid as usize));
    Ok(())
}
