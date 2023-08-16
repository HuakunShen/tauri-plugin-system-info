use std::sync::{Mutex, MutexGuard, PoisonError};

use sysinfo::{
    Cpu, CpuExt, CpuRefreshKind, Disk, DiskExt, Pid, ProcessRefreshKind, RefreshKind, System,
    SystemExt,
};

pub fn get_sys() -> System {
    System::new_all()
}

/// A Mute Wrapper for sysinfo crate's System struct
pub struct SysInfo {
    pub sys: Mutex<System>,
}

impl Default for SysInfo {
    fn default() -> SysInfo {
        SysInfo {
            sys: Mutex::new(System::new_all()),
        }
    }
}

/// Impl methods from sysinfo's System struct for convenience
impl SysInfo {
    pub fn get_sys(&self) -> MutexGuard<'_, System> {
        self.sys.lock().unwrap()
    }
    // refresh system info
    pub fn refresh_memory(&self) {
        self.get_sys().refresh_memory();
    }
    pub fn refresh_all(&self) {
        self.get_sys().refresh_all();
    }
    pub fn refresh_cpu(&self) {
        self.get_sys().refresh_cpu();
    }

    pub fn refresh_specifics(&self, refreshes: RefreshKind) {
        self.get_sys().refresh_specifics(refreshes);
    }
    pub fn refresh_system(&self) {
        self.get_sys().refresh_system();
    }
    pub fn refresh_cpu_specifics(&self, refresh_kind: CpuRefreshKind) {
        self.get_sys().refresh_cpu_specifics(refresh_kind);
    }
    pub fn refresh_components(&self) {
        self.get_sys().refresh_components();
    }
    pub fn refresh_components_list(&self) {
        self.get_sys().refresh_components_list();
    }
    pub fn refresh_processes(&self) {
        self.get_sys().refresh_processes();
    }
    pub fn refresh_processes_specifics(&self, refresh_kind: ProcessRefreshKind) {
        self.sys
            .lock()
            .unwrap()
            .refresh_processes_specifics(refresh_kind);
    }
    pub fn refresh_process(&self, pid: Pid) {
        self.get_sys().refresh_process(pid);
    }
    pub fn refresh_process_specifics(&self, pid: Pid, refresh_kind: ProcessRefreshKind) {
        self.sys
            .lock()
            .unwrap()
            .refresh_process_specifics(pid, refresh_kind);
    }
    pub fn refresh_disks(&self) {
        self.get_sys().refresh_disks();
    }
    pub fn refresh_disks_list(&self) {
        self.get_sys().refresh_disks_list();
    }
    pub fn refresh_users_list(&self) {
        self.get_sys().refresh_users_list();
    }
    pub fn refresh_networks(&self) {
        self.get_sys().refresh_networks();
    }
    pub fn refresh_networks_list(&self) {
        self.get_sys().refresh_networks_list();
    }

    // static info
    pub fn hostname(&self) -> Option<String> {
        self.get_sys().host_name()
    }
    pub fn kernel_version(&self) -> Option<String> {
        self.get_sys().kernel_version()
    }
    pub fn os_version(&self) -> Option<String> {
        self.get_sys().os_version()
    }
    pub fn name(&self) -> Option<String> {
        self.get_sys().name()
    }

    // memory
    pub fn total_memory(&self) -> u64 {
        self.refresh_memory();
        self.get_sys().total_memory()
    }
    pub fn used_memory(&self) -> u64 {
        self.refresh_memory();
        self.get_sys().used_memory()
    }
    pub fn total_swap(&self) -> u64 {
        self.refresh_memory();
        self.get_sys().total_swap()
    }
    pub fn used_swap(&self) -> u64 {
        self.refresh_memory();
        self.get_sys().used_swap()
    }

    // cpu
    // pub fn cpus(&self) -> Vec<Cpu> {
    //     let mut sys = System::default();
    //     sys.refresh_all();
    //     let cpus = sys.cpus();
    //     let cpus_vec = Vec::new();
    //     for cpu in cpus {
    //         // cpu.name();
    //         cpus_vec.push(Cpu {
    //             name: cpu.name(),
    //             cpu_usage: cpu.cpu_usage(),
    //             cpu_data: cpu.cpu(),

    //         })

    //     }
    //     // cpus
    //     cpus
    // }

    pub fn cpu_count(&self) -> usize {
        self.get_sys().cpus().len()
    }

    // disks
    // pub fn disks(&self) -> Vec<Disk> {
    //     self.refresh_disks_list();
    //     let disks = self.get_sys().disks();
    //     let mut ret_disks = Vec::new();
    //     for disk in disks {
    //         ret_disks.push(Disk {
    //             type_: disk.kind(),
    //             name: disk.name().into(),
    //             file_system: disk.file_system().to_vec(),
    //             mount_point: disk.mount_point().into(),
    //             total_space: disk.total_space(),
    //             available_space: disk.available_space(),
    //             is_removable: disk.is_removable()
    //         });
    //     }
    //     ret_disks
    // }

    // network
    // pub fn networks(&self) {
    //     let networks = self.get_sys().networks();
    //     // let n = networks.clone();
    // }
}
