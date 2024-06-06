'use strict';

var core = require('@tauri-apps/api/core');
var zod = require('zod');

function allSysInfo() {
    return core.invoke("plugin:system-info|all_sys_info");
}
// Memory
function totalMemory() {
    return core.invoke("plugin:system-info|total_memory");
}
function usedMemory() {
    return core.invoke("plugin:system-info|used_memory");
}
function totalSwap() {
    return core.invoke("plugin:system-info|total_swap");
}
function usedSwap() {
    return core.invoke("plugin:system-info|used_swap");
}
function memoryInfo() {
    return core.invoke("plugin:system-info|memory_info");
}
// Static Info
function hostname() {
    return core.invoke("plugin:system-info|hostname");
}
function name() {
    return core.invoke("plugin:system-info|name");
}
function kernelVersion() {
    return core.invoke("plugin:system-info|kernel_version");
}
function osVersion() {
    return core.invoke("plugin:system-info|os_version");
}
function staticInfo() {
    return core.invoke("plugin:system-info|static_info");
}
// Components
function components() {
    return core.invoke("plugin:system-info|components");
}
// Cpu
function cpus() {
    return core.invoke("plugin:system-info|cpus");
}
function cpuCount() {
    return core.invoke("plugin:system-info|cpu_count");
}
function cpuInfo() {
    return core.invoke("plugin:system-info|cpu_info");
}
// Disk
function disks() {
    return core.invoke("plugin:system-info|disks");
}
// Network
function networks() {
    return core.invoke("plugin:system-info|networks");
}
// Process
function processes() {
    return core.invoke("plugin:system-info|processes");
}
// Refresh
function refreshAll() {
    return core.invoke("plugin:system-info|refresh_all");
}
function refreshMemory() {
    return core.invoke("plugin:system-info|refresh_memory");
}
function refreshCpu() {
    return core.invoke("plugin:system-info|refresh_cpu");
}
function refreshProcesses() {
    return core.invoke("plugin:system-info|refresh_processes");
}
function debugCommand() {
    return core.invoke("plugin:system-info|debug");
}
function batteries() {
    return core.invoke("plugin:system-info|batteries");
}

const BatteryState = zod.z.enum([
    "Unknown",
    "Charging",
    "Discharging",
    "Empty",
    "Full",
]);
const BatteryTechnology = zod.z.enum([
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
const Battery = zod.z.object({
    state_of_charge: zod.z.number(),
    energy: zod.z.number(),
    energy_full: zod.z.number(),
    energy_full_design: zod.z.number(),
    energy_rate: zod.z
        .number()
        .describe("Amount of energy being drained from the battery."),
    voltage: zod.z.number(),
    state_of_health: zod.z.number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelin: zod.z.number().nullable(),
    temperature_celsius: zod.z.number().nullable(),
    temperature_fahrenheit: zod.z.number().nullable(),
    cycle_count: zod.z.number().nullable(),
    vendor: zod.z.string().nullable(),
    model: zod.z.string().nullable(),
    serial_number: zod.z.string().nullable(),
    time_to_full: zod.z.number().nullable(),
    time_to_empty: zod.z.number().nullable(),
});
const Batteries = Battery.array();
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = z.enum(["HDD", "SSD", "Unknown"]);
const DiskKind = zod.z.union([
    zod.z.literal("HDD"),
    zod.z.literal("SSD"),
    zod.z.object({
        Unknown: zod.z.number(),
    }),
]);
const MacAddress = zod.z.number().array().length(6);
const ProcessStatus = zod.z.union([
    zod.z.literal("Idle"),
    zod.z.literal("Run"),
    zod.z.literal("Sleep"),
    zod.z.literal("Stop"),
    zod.z.literal("Zombie"),
    zod.z.literal("Tracing"),
    zod.z.literal("Dead"),
    zod.z.literal("Wakekill"),
    zod.z.literal("Waking"),
    zod.z.literal("Parked"),
    zod.z.literal("LockBlocked"),
    zod.z.literal("UninterruptibleDiskSleep"),
    zod.z.object({
        Unknown: zod.z.number(),
    }),
]);
const DiskUsage = zod.z.object({
    total_written_bytes: zod.z.number(),
    written_bytes: zod.z.number(),
    total_read_bytes: zod.z.number(),
    read_bytes: zod.z.number(),
});
const Cpu = zod.z.object({
    name: zod.z.string(),
    frequency: zod.z.number(),
    cpu_usage: zod.z.number(),
    vendor_id: zod.z.string(),
    brand: zod.z.string(),
});
const Disk = zod.z.object({
    kind: DiskKind,
    name: zod.z.string(),
    file_system: zod.z.string(),
    mount_point: zod.z.string(),
    total_space: zod.z.number(),
    available_space: zod.z.number(),
    is_removable: zod.z.boolean(),
});
const Network = zod.z.object({
    interface_name: zod.z.string(),
    received: zod.z.number(),
    total_received: zod.z.number(),
    transmitted: zod.z.number(),
    total_transmitted: zod.z.number(),
    packets_received: zod.z.number(),
    total_packets_received: zod.z.number(),
    packets_transmitted: zod.z.number(),
    total_packets_transmitted: zod.z.number(),
    errors_on_received: zod.z.number(),
    total_errors_on_received: zod.z.number(),
    errors_on_transmitted: zod.z.number(),
    total_errors_on_transmitted: zod.z.number(),
    mac_address: zod.z.number().array(),
    mac_address_str: zod.z.string(),
});
const Component = zod.z.object({
    temperature: zod.z.number(),
    max: zod.z.number(),
    critical: zod.z.number().nullable(),
    label: zod.z.string(),
});
const Process = zod.z.object({
    name: zod.z.string(),
    cmd: zod.z.string().array(),
    exe: zod.z.string().nullable(),
    pid: zod.z.number(),
    environ: zod.z.string().array(),
    cwd: zod.z.string().nullable(),
    root: zod.z.string().nullable(),
    memory: zod.z.number(),
    virtual_memory: zod.z.number(),
    parent: zod.z.number().nullable(),
    status: ProcessStatus,
    start_time: zod.z.number(),
    run_time: zod.z.number(),
    cpu_usage: zod.z.number(),
    disk_usage: DiskUsage,
    user_id: zod.z.string().nullable(),
    effective_user_id: zod.z.string().nullable(),
    group_id: zod.z.string().nullable(),
    effective_group_id: zod.z.string().nullable(),
    session_id: zod.z.number().nullable(),
});
// aggregate info
const StaticInfo = zod.z.object({
    hostname: zod.z.string().nullable(),
    kernel_version: zod.z.string().nullable(),
    os_version: zod.z.string().nullable(),
    name: zod.z.string().nullable(),
});
const MemoryInfo = zod.z.object({
    total_memory: zod.z.number(),
    used_memory: zod.z.number(),
    total_swap: zod.z.number(),
    used_swap: zod.z.number(),
});
const CpuInfo = zod.z.object({
    cpus: Cpu.array(),
    cpu_count: zod.z.number(),
});
const AllSystemInfo = zod.z.object({
    hostname: zod.z.string().nullable(),
    kernel_version: zod.z.string().nullable(),
    os_version: zod.z.string().nullable(),
    name: zod.z.string().nullable(),
    total_memory: zod.z.number(),
    used_memory: zod.z.number(),
    total_swap: zod.z.number(),
    used_swap: zod.z.number(),
    cpus: Cpu.array(),
    cpu_count: zod.z.number(),
    disks: Disk.array(),
    networks: Network.array(),
    components: Component.array(),
    processes: Process.array(),
    batteries: Batteries,
});

exports.AllSystemInfo = AllSystemInfo;
exports.Batteries = Batteries;
exports.Battery = Battery;
exports.BatteryState = BatteryState;
exports.BatteryTechnology = BatteryTechnology;
exports.Component = Component;
exports.Cpu = Cpu;
exports.CpuInfo = CpuInfo;
exports.Disk = Disk;
exports.DiskKind = DiskKind;
exports.DiskUsage = DiskUsage;
exports.MacAddress = MacAddress;
exports.MemoryInfo = MemoryInfo;
exports.Network = Network;
exports.Process = Process;
exports.ProcessStatus = ProcessStatus;
exports.StaticInfo = StaticInfo;
exports.allSysInfo = allSysInfo;
exports.batteries = batteries;
exports.components = components;
exports.cpuCount = cpuCount;
exports.cpuInfo = cpuInfo;
exports.cpus = cpus;
exports.debugCommand = debugCommand;
exports.disks = disks;
exports.hostname = hostname;
exports.kernelVersion = kernelVersion;
exports.memoryInfo = memoryInfo;
exports.name = name;
exports.networks = networks;
exports.osVersion = osVersion;
exports.processes = processes;
exports.refreshAll = refreshAll;
exports.refreshCpu = refreshCpu;
exports.refreshMemory = refreshMemory;
exports.refreshProcesses = refreshProcesses;
exports.staticInfo = staticInfo;
exports.totalMemory = totalMemory;
exports.totalSwap = totalSwap;
exports.usedMemory = usedMemory;
exports.usedSwap = usedSwap;
