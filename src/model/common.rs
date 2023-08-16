use serde::{Deserialize, Serialize};

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
