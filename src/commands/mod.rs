use crate::{model::AllSystemInfo, utils::SysInfoState};

pub mod battery;
pub mod component;
pub mod cpu;
pub mod disk;
pub mod memory;
pub mod network;
pub mod process;
pub mod refresh;
pub mod static_info;

#[tauri::command]
pub fn all_sys_info(state: tauri::State<'_, SysInfoState>) -> Result<AllSystemInfo, String> {
    let hostname = state.sysinfo.lock().unwrap().hostname();
    let kernel_version = state.sysinfo.lock().unwrap().kernel_version();
    let os_version = state.sysinfo.lock().unwrap().os_version();
    let name = state.sysinfo.lock().unwrap().name();
    let total_memory = state.sysinfo.lock().unwrap().total_memory();
    let used_memory = state.sysinfo.lock().unwrap().used_memory();
    let total_swap = state.sysinfo.lock().unwrap().total_swap();
    let used_swap = state.sysinfo.lock().unwrap().used_swap();
    let cpus = state.sysinfo.lock().unwrap().cpus();
    let cpu_count = state.sysinfo.lock().unwrap().cpu_count();
    let disks = state.sysinfo.lock().unwrap().disks();
    let networks = state.sysinfo.lock().unwrap().networks();
    let components = state.sysinfo.lock().unwrap().components();
    let processes = state.sysinfo.lock().unwrap().processes();
    let batteries = state
        .sysinfo
        .lock()
        .unwrap()
        .batteries()
        .map_err(|err| err.to_string())?;
    Ok(AllSystemInfo {
        hostname,
        kernel_version,
        os_version,
        name,
        total_memory,
        used_memory,
        total_swap,
        used_swap,
        cpus,
        cpu_count,
        disks,
        networks,
        components,
        processes,
        batteries,
    })
}
