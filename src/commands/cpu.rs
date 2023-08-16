use crate::{
    model::{Cpu, CpuInfo},
    utils::SysInfoState,
};

#[tauri::command]
pub fn cpus(state: tauri::State<'_, SysInfoState>) -> Result<Vec<Cpu>, String> {
    Ok(state.sysinfo.lock().unwrap().cpus())
}

#[tauri::command]
pub fn cpu_count(state: tauri::State<'_, SysInfoState>) -> Result<usize, String> {
    Ok(state.sysinfo.lock().unwrap().cpu_count())
}

#[tauri::command]
pub fn cpu_info(state: tauri::State<'_, SysInfoState>) -> Result<CpuInfo, String> {
    let cpus = state.sysinfo.lock().unwrap().cpus();
    let cpu_count = state.sysinfo.lock().unwrap().cpu_count();
    let cpu_info = CpuInfo { cpus, cpu_count };
    Ok(cpu_info)
}
