use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use sysinfo::{ComponentExt, CpuExt, DiskExt, NetworkExt, PidExt, ProcessExt};

#[derive(Debug, Serialize, Deserialize)]
pub enum DiskKind {
    /// HDD type.
    HDD,
    /// SSD type.
    SSD,
    /// Unknown type.
    Unknown(isize),
}
impl From<sysinfo::DiskKind> for DiskKind {
    fn from(value: sysinfo::DiskKind) -> Self {
        match value {
            sysinfo::DiskKind::HDD => DiskKind::HDD,
            sysinfo::DiskKind::SSD => DiskKind::SSD,
            sysinfo::DiskKind::Unknown(isize) => DiskKind::Unknown(isize),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MacAddr(pub [u8; 6]);

impl From<sysinfo::MacAddr> for MacAddr {
    fn from(value: sysinfo::MacAddr) -> Self {
        MacAddr(value.0)
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum ProcessStatus {
    Idle,
    Run,
    Sleep,
    Stop,
    Zombie,
    Tracing,
    Dead,
    Wakekill,
    Waking,
    Parked,
    LockBlocked,
    UninterruptibleDiskSleep,
    Unknown(u32),
}

impl From<sysinfo::ProcessStatus> for ProcessStatus {
    fn from(ps: sysinfo::ProcessStatus) -> Self {
        match ps {
            sysinfo::ProcessStatus::Idle => ProcessStatus::Idle,
            sysinfo::ProcessStatus::Run => ProcessStatus::Run,
            sysinfo::ProcessStatus::Sleep => ProcessStatus::Sleep,
            sysinfo::ProcessStatus::Stop => ProcessStatus::Stop,
            sysinfo::ProcessStatus::Zombie => ProcessStatus::Zombie,
            sysinfo::ProcessStatus::Tracing => ProcessStatus::Tracing,
            sysinfo::ProcessStatus::Dead => ProcessStatus::Dead,
            sysinfo::ProcessStatus::Wakekill => ProcessStatus::Wakekill,
            sysinfo::ProcessStatus::Waking => ProcessStatus::Waking,
            sysinfo::ProcessStatus::Parked => ProcessStatus::Parked,
            sysinfo::ProcessStatus::LockBlocked => ProcessStatus::LockBlocked,
            sysinfo::ProcessStatus::UninterruptibleDiskSleep => {
                ProcessStatus::UninterruptibleDiskSleep
            }
            sysinfo::ProcessStatus::Unknown(u32) => ProcessStatus::Unknown(u32),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DiskUsage {
    /// Total number of written bytes.
    pub total_written_bytes: u64,
    /// Number of written bytes since the last refresh.
    pub written_bytes: u64,
    /// Total number of read bytes.
    pub total_read_bytes: u64,
    /// Number of read bytes since the last refresh.
    pub read_bytes: u64,
}

impl From<sysinfo::DiskUsage> for DiskUsage {
    fn from(value: sysinfo::DiskUsage) -> Self {
        DiskUsage {
            total_written_bytes: value.total_written_bytes,
            written_bytes: value.written_bytes,
            total_read_bytes: value.total_read_bytes,
            read_bytes: value.read_bytes,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Cpu {
    name: String,
    frequency: u64,
    cpu_usage: f32,
    vendor_id: String,
    brand: String,
}

impl From<&sysinfo::Cpu> for Cpu {
    fn from(cpu: &sysinfo::Cpu) -> Self {
        Cpu {
            name: cpu.name().to_string(),
            frequency: cpu.frequency(),
            cpu_usage: cpu.cpu_usage(),
            vendor_id: cpu.vendor_id().to_string(),
            brand: cpu.brand().to_string(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Disk {
    kind: DiskKind,
    name: String,
    file_system: Vec<u8>,
    mount_point: PathBuf,
    total_space: u64,
    available_space: u64,
    is_removable: bool,
}

impl From<&sysinfo::Disk> for Disk {
    fn from(disk: &sysinfo::Disk) -> Self {
        Disk {
            kind: disk.kind().into(),
            name: disk.name().to_string_lossy().into_owned(),
            file_system: disk.file_system().to_vec(),
            mount_point: disk.mount_point().into(),
            total_space: disk.total_space(),
            available_space: disk.available_space(),
            is_removable: disk.is_removable(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Network {
    interface_name: String,
    received: u64,
    total_received: u64,
    transmitted: u64,
    total_transmitted: u64,
    packets_received: u64,
    total_packets_received: u64,
    packets_transmitted: u64,
    total_packets_transmitted: u64,
    errors_on_received: u64,
    total_errors_on_received: u64,
    errors_on_transmitted: u64,
    total_errors_on_transmitted: u64,
    mac_address: MacAddr,
}

impl Network {
    pub fn new(name: &str, network_data: &sysinfo::NetworkData) -> Self {
        Network {
            interface_name: name.to_string(),
            received: network_data.received(),
            total_received: network_data.total_received(),
            transmitted: network_data.transmitted(),
            total_transmitted: network_data.total_transmitted(),
            packets_received: network_data.packets_received(),
            total_packets_received: network_data.total_packets_received(),
            packets_transmitted: network_data.packets_transmitted(),
            total_packets_transmitted: network_data.total_packets_transmitted(),
            errors_on_received: network_data.errors_on_received(),
            total_errors_on_received: network_data.total_errors_on_received(),
            errors_on_transmitted: network_data.errors_on_transmitted(),
            total_errors_on_transmitted: network_data.total_errors_on_transmitted(),
            mac_address: network_data.mac_address().into(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Component {
    temperature: f32,
    max: f32,
    critical: Option<f32>,
    label: String,
}

impl From<&sysinfo::Component> for Component {
    fn from(component: &sysinfo::Component) -> Self {
        Component {
            temperature: component.temperature(),
            max: component.max(),
            critical: component.critical(),
            label: component.label().to_string(),
        }
    }
}

pub type Uid = String;
pub type Gid = String;
pub type Pid = u32;

#[derive(Debug, Serialize, Deserialize)]
pub struct Process {
    name: String,
    cmd: Vec<String>,
    exe: PathBuf,
    pid: Pid,
    environ: Vec<String>,
    cwd: PathBuf,
    root: PathBuf,
    memory: u64,
    virtual_memory: u64,
    parent: Option<Pid>,
    status: ProcessStatus,
    start_time: u64,
    run_time: u64,
    cpu_usage: f32,
    disk_usage: DiskUsage,
    user_id: Option<Uid>,
    effective_user_id: Option<Uid>,
    group_id: Option<Gid>,
    effective_group_id: Option<Gid>,
    session_id: Option<Pid>,
}

impl From<&sysinfo::Process> for Process {
    fn from(proc: &sysinfo::Process) -> Self {
        Process {
            name: proc.name().to_string(),
            cmd: proc.cmd().to_vec(),
            exe: proc.exe().into(),
            pid: proc.pid().as_u32(),
            environ: proc.environ().to_vec(),
            cwd: proc.cwd().into(),
            root: proc.root().into(),
            memory: proc.memory(),
            virtual_memory: proc.virtual_memory(),
            parent: match proc.parent() {
                Some(parent) => Some(parent.as_u32()),
                None => None,
            },
            status: proc.status().into(),
            start_time: proc.start_time(),
            run_time: proc.run_time(),
            cpu_usage: proc.cpu_usage(),
            disk_usage: proc.disk_usage().into(),
            user_id: proc.user_id().map(|uid| uid.to_string()),
            effective_user_id: proc.effective_user_id().map(|uid| uid.to_string()),
            group_id: proc.group_id().map(|gid| gid.to_string()),
            effective_group_id: proc.effective_group_id().map(|gid| gid.to_string()),
            session_id: match proc.session_id() {
                Some(session_id) => Some(session_id.as_u32()),
                None => None,
            },
        }
    }
}
