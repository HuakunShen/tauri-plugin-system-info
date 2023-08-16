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
pub fn refresh_system(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_system();
    Ok(())
}

#[tauri::command]
pub fn refresh_components(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_components();
    Ok(())
}

#[tauri::command]
pub fn refresh_components_list(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_components_list();
    Ok(())
}

#[tauri::command]
pub fn refresh_disks(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_disks();
    Ok(())
}

#[tauri::command]
pub fn refresh_disks_list(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_disks_list();
    Ok(())
}

#[tauri::command]
pub fn refresh_users_list(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_users_list();
    Ok(())
}

#[tauri::command]
pub fn refresh_networks(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_networks();
    Ok(())
}

#[tauri::command]
pub fn refresh_networks_list(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_networks_list();
    Ok(())
}

#[tauri::command]
pub fn refresh_processes(state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
    state.sysinfo.lock().unwrap().refresh_processes();
    Ok(())
}

// #[tauri::command]
// pub fn refresh_process(pid: u32, state: tauri::State<'_, SysInfoState>) -> Result<(), String> {
//     state.sysinfo.lock().unwrap().refresh_process(sysinfo::Pid::);
//     Ok(())
// }
