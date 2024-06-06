import { invoke } from '@tauri-apps/api/core';
import { z } from 'zod';

function allSysInfo() {
    return invoke("plugin:system-info|all_sys_info");
}
// Memory
function totalMemory() {
    return invoke("plugin:system-info|total_memory");
}
function usedMemory() {
    return invoke("plugin:system-info|used_memory");
}
function totalSwap() {
    return invoke("plugin:system-info|total_swap");
}
function usedSwap() {
    return invoke("plugin:system-info|used_swap");
}
function memoryInfo() {
    return invoke("plugin:system-info|memory_info");
}
// Static Info
function hostname() {
    return invoke("plugin:system-info|hostname");
}
function name() {
    return invoke("plugin:system-info|name");
}
function kernelVersion() {
    return invoke("plugin:system-info|kernel_version");
}
function osVersion() {
    return invoke("plugin:system-info|os_version");
}
function staticInfo() {
    return invoke("plugin:system-info|static_info");
}
// Components
function components() {
    return invoke("plugin:system-info|components");
}
// Cpu
function cpus() {
    return invoke("plugin:system-info|cpus");
}
function cpuCount() {
    return invoke("plugin:system-info|cpu_count");
}
function cpuInfo() {
    return invoke("plugin:system-info|cpu_info");
}
// Disk
function disks() {
    return invoke("plugin:system-info|disks");
}
// Network
function networks() {
    return invoke("plugin:system-info|networks");
}
// Process
function processes() {
    return invoke("plugin:system-info|processes");
}
// Refresh
function refreshAll() {
    return invoke("plugin:system-info|refresh_all");
}
function refreshMemory() {
    return invoke("plugin:system-info|refresh_memory");
}
function refreshCpu() {
    return invoke("plugin:system-info|refresh_cpu");
}
function refreshProcesses() {
    return invoke("plugin:system-info|refresh_processes");
}
function debugCommand() {
    return invoke("plugin:system-info|debug");
}
function batteries() {
    return invoke("plugin:system-info|batteries");
}

const BatteryState = z.enum([
    "Unknown",
    "Charging",
    "Discharging",
    "Empty",
    "Full",
]);
const BatteryTechnology = z.enum([
    "Unknown",
    "LithiumIon",
    "LeadAcid",
    "LithiumPolymer",
    "NickelMetalHydride",
    "NickelCadmium",
    "NickelZinc",
    "LithiumIronPhosphate",
    "RechargeableAlkalineManganese",
]);
const Battery = z.object({
    state_of_charge: z.number(),
    energy: z.number(),
    energy_full: z.number(),
    energy_full_design: z.number(),
    energy_rate: z
        .number()
        .describe("Amount of energy being drained from the battery."),
    voltage: z.number(),
    state_of_health: z.number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelin: z.number().nullable(),
    temperature_celsius: z.number().nullable(),
    temperature_fahrenheit: z.number().nullable(),
    cycle_count: z.number().nullable(),
    vendor: z.string().nullable(),
    model: z.string().nullable(),
    serial_number: z.string().nullable(),
    time_to_full: z.number().nullable(),
    time_to_empty: z.number().nullable(),
});
const Batteries = Battery.array();
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = z.enum(["HDD", "SSD", "Unknown"]);
const DiskKind = z.union([
    z.literal("HDD"),
    z.literal("SSD"),
    z.object({
        Unknown: z.number(),
    }),
]);
const MacAddress = z.number().array().length(6);
const ProcessStatus = z.union([
    z.literal("Idle"),
    z.literal("Run"),
    z.literal("Sleep"),
    z.literal("Stop"),
    z.literal("Zombie"),
    z.literal("Tracing"),
    z.literal("Dead"),
    z.literal("Wakekill"),
    z.literal("Waking"),
    z.literal("Parked"),
    z.literal("LockBlocked"),
    z.literal("UninterruptibleDiskSleep"),
    z.object({
        Unknown: z.number(),
    }),
]);
const DiskUsage = z.object({
    total_written_bytes: z.number(),
    written_bytes: z.number(),
    total_read_bytes: z.number(),
    read_bytes: z.number(),
});
const Cpu = z.object({
    name: z.string(),
    frequency: z.number(),
    cpu_usage: z.number(),
    vendor_id: z.string(),
    brand: z.string(),
});
const Disk = z.object({
    kind: DiskKind,
    name: z.string(),
    file_system: z.string(),
    mount_point: z.string(),
    total_space: z.number(),
    available_space: z.number(),
    is_removable: z.boolean(),
});
const Network = z.object({
    interface_name: z.string(),
    received: z.number(),
    total_received: z.number(),
    transmitted: z.number(),
    total_transmitted: z.number(),
    packets_received: z.number(),
    total_packets_received: z.number(),
    packets_transmitted: z.number(),
    total_packets_transmitted: z.number(),
    errors_on_received: z.number(),
    total_errors_on_received: z.number(),
    errors_on_transmitted: z.number(),
    total_errors_on_transmitted: z.number(),
    mac_address: z.number().array(),
    mac_address_str: z.string(),
});
const Component = z.object({
    temperature: z.number(),
    max: z.number(),
    critical: z.number().nullable(),
    label: z.string(),
});
const Process = z.object({
    name: z.string(),
    cmd: z.string().array(),
    exe: z.string().nullable(),
    pid: z.number(),
    environ: z.string().array(),
    cwd: z.string().nullable(),
    root: z.string().nullable(),
    memory: z.number(),
    virtual_memory: z.number(),
    parent: z.number().nullable(),
    status: ProcessStatus,
    start_time: z.number(),
    run_time: z.number(),
    cpu_usage: z.number(),
    disk_usage: DiskUsage,
    user_id: z.string().nullable(),
    effective_user_id: z.string().nullable(),
    group_id: z.string().nullable(),
    effective_group_id: z.string().nullable(),
    session_id: z.number().nullable(),
});
// aggregate info
const StaticInfo = z.object({
    hostname: z.string().nullable(),
    kernel_version: z.string().nullable(),
    os_version: z.string().nullable(),
    name: z.string().nullable(),
});
const MemoryInfo = z.object({
    total_memory: z.number(),
    used_memory: z.number(),
    total_swap: z.number(),
    used_swap: z.number(),
});
const CpuInfo = z.object({
    cpus: Cpu.array(),
    cpu_count: z.number(),
});
const AllSystemInfo = z.object({
    hostname: z.string().nullable(),
    kernel_version: z.string().nullable(),
    os_version: z.string().nullable(),
    name: z.string().nullable(),
    total_memory: z.number(),
    used_memory: z.number(),
    total_swap: z.number(),
    used_swap: z.number(),
    cpus: Cpu.array(),
    cpu_count: z.number(),
    disks: Disk.array(),
    networks: Network.array(),
    components: Component.array(),
    processes: Process.array(),
    batteries: Batteries,
});

export { AllSystemInfo, Batteries, Battery, BatteryState, BatteryTechnology, Component, Cpu, CpuInfo, Disk, DiskKind, DiskUsage, MacAddress, MemoryInfo, Network, Process, ProcessStatus, StaticInfo, allSysInfo, batteries, components, cpuCount, cpuInfo, cpus, debugCommand, disks, hostname, kernelVersion, memoryInfo, name, networks, osVersion, processes, refreshAll, refreshCpu, refreshMemory, refreshProcesses, staticInfo, totalMemory, totalSwap, usedMemory, usedSwap };
