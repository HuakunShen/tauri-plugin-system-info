use crate::model::{Battery, Component, Cpu, Disk, Network, Process};
use std::sync::Mutex;
use sysinfo::{
    Components, CpuRefreshKind, Disks, Networks, Pid, ProcessRefreshKind, RefreshKind, System,
};

pub fn get_sys() -> System {
    System::new_all()
}
pub struct SysInfoState {
    pub sysinfo: Mutex<SysInfo>,
}
/// A Mute Wrapper for sysinfo crate's System struct
pub struct SysInfo {
    pub sys: System,
}

impl Default for SysInfoState {
    fn default() -> SysInfoState {
        SysInfoState {
            sysinfo: Mutex::new(SysInfo {
                sys: System::new_all(),
            }),
        }
    }
}

/// Impl methods from sysinfo's System struct for convenience
impl SysInfo {
    // refresh system info
    pub fn refresh_all(&mut self) {
        self.sys.refresh_all();
    }
    pub fn refresh_memory(&mut self) {
        self.sys.refresh_memory();
    }
    pub fn refresh_cpu(&mut self) {
        self.sys.refresh_cpu();
    }
    pub fn refresh_processes(&mut self) {
        self.sys.refresh_processes();
    }
    pub fn refresh_process(&mut self, pid: Pid) {
        self.sys.refresh_process(pid);
    }
    pub fn refresh_specifics(&mut self, refreshes: RefreshKind) {
        self.sys.refresh_specifics(refreshes);
    }
    pub fn refresh_cpu_specifics(&mut self, refresh_kind: CpuRefreshKind) {
        self.sys.refresh_cpu_specifics(refresh_kind);
    }
    pub fn refresh_processes_specifics(&mut self, refresh_kind: ProcessRefreshKind) {
        self.sys.refresh_processes_specifics(refresh_kind);
    }
    pub fn refresh_process_specifics(&mut self, pid: Pid, refresh_kind: ProcessRefreshKind) {
        self.sys.refresh_process_specifics(pid, refresh_kind);
    }

    // static info
    pub fn hostname(&self) -> Option<String> {
        System::host_name()
    }
    pub fn kernel_version(&self) -> Option<String> {
        System::kernel_version()
    }
    pub fn os_version(&self) -> Option<String> {
        System::os_version()
    }
    pub fn name(&self) -> Option<String> {
        System::name()
    }

    // memory
    pub fn total_memory(&mut self) -> u64 {
        self.refresh_memory();
        self.sys.total_memory()
    }
    pub fn used_memory(&mut self) -> u64 {
        self.refresh_memory();
        self.sys.used_memory()
    }
    pub fn total_swap(&mut self) -> u64 {
        self.refresh_memory();
        self.sys.total_swap()
    }
    pub fn used_swap(&mut self) -> u64 {
        self.refresh_memory();
        self.sys.used_swap()
    }

    // cpu
    pub fn cpus(&self) -> Vec<Cpu> {
        self.sys.cpus().iter().map(|cpu| cpu.into()).collect()
    }

    pub fn cpu_count(&self) -> usize {
        self.sys.cpus().len()
    }

    // disks
    pub fn disks(&mut self) -> Vec<Disk> {
        let disks = Disks::new_with_refreshed_list();
        disks.iter().map(|disk| disk.into()).collect()
    }

    // other
    pub fn networks(&self) -> Vec<Network> {
        let networks = Networks::new_with_refreshed_list();
        networks
            .into_iter()
            .map(|(name, data)| Network::new(name, data))
            .collect()
    }
    pub fn components(&self) -> Vec<Component> {
        let components = Components::new_with_refreshed_list();
        components
            .iter()
            .map(|component| component.into())
            .collect()
    }
    pub fn processes(&self) -> Vec<Process> {
        self.sys
            .processes()
            .iter()
            .map(|(_, process)| process.into())
            .collect()
    }
    pub fn batteries(&self) -> Result<Vec<Battery>, starship_battery::Error> {
        let manager = starship_battery::Manager::new()?;
        Ok(manager
            .batteries()?
            .enumerate()
            .filter_map(|(_, maybe_battery)| match maybe_battery {
                Ok(battery) => Some(battery.into()),
                Err(_) => None,
            })
            .collect())
    }
}
