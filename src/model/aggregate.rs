// This file contains System Info Aggregation structs
use crate::model::common::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct AllSystemInfo {
    pub hostname: Option<String>,
    pub kernel_version: Option<String>,
    pub os_version: Option<String>,
    pub name: Option<String>,
    pub total_memory: u64,
    pub used_memory: u64,
    pub total_swap: u64,
    pub used_swap: u64,
    pub cpus: Vec<Cpu>,
    pub cpu_count: usize,
    pub disks: Vec<Disk>,
    pub networks: Vec<Network>,
    pub components: Vec<Component>,
    pub processes: Vec<Process>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StaticInfo {
    pub hostname: Option<String>,
    pub kernel_version: Option<String>,
    pub os_version: Option<String>,
    pub name: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MemoryInfo {
    pub total_memory: u64,
    pub used_memory: u64,
    pub total_swap: u64,
    pub used_swap: u64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CpuInfo {
    pub cpus: Vec<Cpu>,
    pub cpu_count: usize,
}
