import { invoke } from '@tauri-apps/api/core';
import { enum_, object, nullable, number, string, array, union, literal, pipe, length, boolean } from 'valibot';

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

var BatteryStateEnum;
(function (BatteryStateEnum) {
    BatteryStateEnum["Unknown"] = "Unknown";
    BatteryStateEnum["Charging"] = "Charging";
    BatteryStateEnum["Discharging"] = "Discharging";
    BatteryStateEnum["Empty"] = "Empty";
    BatteryStateEnum["Full"] = "Full";
})(BatteryStateEnum || (BatteryStateEnum = {}));
const BatteryState = enum_(BatteryStateEnum);
var BatteryTechnologyEnum;
(function (BatteryTechnologyEnum) {
    BatteryTechnologyEnum["Unknown"] = "Unknown";
    BatteryTechnologyEnum["LithiumIon"] = "LithiumIon";
    BatteryTechnologyEnum["LeadAcid"] = "LeadAcid";
    BatteryTechnologyEnum["LithiumPolymer"] = "LithiumPolymer";
    BatteryTechnologyEnum["NickelMetalHydride"] = "NickelMetalHydride";
    BatteryTechnologyEnum["NickelCadmium"] = "NickelCadmium";
    BatteryTechnologyEnum["NickelZinc"] = "NickelZinc";
    BatteryTechnologyEnum["LithiumIronPhosphate"] = "LithiumIronPhosphate";
    BatteryTechnologyEnum["RechargeableAlkalineManganese"] = "RechargeableAlkalineManganese";
})(BatteryTechnologyEnum || (BatteryTechnologyEnum = {}));
const BatteryTechnology = enum_(BatteryTechnologyEnum);
const Battery = object({
    state_of_charge: number(),
    energy: number(),
    energy_full: number(),
    energy_full_design: number(),
    energy_rate: number(),
    // .describe("Amount of energy being drained from the battery."),
    voltage: number(),
    state_of_health: number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelvin: nullable(number()),
    temperature_celsius: nullable(number()),
    temperature_fahrenheit: nullable(number()),
    cycle_count: nullable(number()),
    vendor: nullable(string()),
    model: nullable(string()),
    serial_number: nullable(string()),
    time_to_full: nullable(number()),
    time_to_empty: nullable(number())
});
const Batteries = array(Battery);
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = enum_(["HDD", "SSD", "Unknown"]);
const DiskKind = union([
    literal("HDD"),
    literal("SSD"),
    object({
        Unknown: number()
    })
]);
const MacAddress = pipe(array(number()), length(6));
const ProcessStatus = union([
    literal("Idle"),
    literal("Run"),
    literal("Sleep"),
    literal("Stop"),
    literal("Zombie"),
    literal("Tracing"),
    literal("Dead"),
    literal("Wakekill"),
    literal("Waking"),
    literal("Parked"),
    literal("LockBlocked"),
    literal("UninterruptibleDiskSleep"),
    object({
        Unknown: number()
    })
]);
const DiskUsage = object({
    total_written_bytes: number(),
    written_bytes: number(),
    total_read_bytes: number(),
    read_bytes: number()
});
const Cpu = object({
    name: string(),
    frequency: number(),
    cpu_usage: number(),
    vendor_id: string(),
    brand: string()
});
const Disk = object({
    kind: DiskKind,
    name: string(),
    file_system: string(),
    mount_point: string(),
    total_space: number(),
    available_space: number(),
    is_removable: boolean()
});
const Network = object({
    interface_name: string(),
    received: number(),
    total_received: number(),
    transmitted: number(),
    total_transmitted: number(),
    packets_received: number(),
    total_packets_received: number(),
    packets_transmitted: number(),
    total_packets_transmitted: number(),
    errors_on_received: number(),
    total_errors_on_received: number(),
    errors_on_transmitted: number(),
    total_errors_on_transmitted: number(),
    mac_address: array(number()),
    mac_address_str: string()
});
const Component = object({
    temperature: number(),
    max: number(),
    critical: nullable(number()),
    label: string()
});
const Process = object({
    name: string(),
    cmd: array(string()),
    exe: nullable(string()),
    pid: number(),
    environ: array(string()),
    cwd: nullable(string()),
    root: nullable(string()),
    memory: number(),
    virtual_memory: number(),
    parent: nullable(number()),
    status: ProcessStatus,
    start_time: number(),
    run_time: number(),
    cpu_usage: number(),
    disk_usage: DiskUsage,
    user_id: nullable(string()),
    effective_user_id: nullable(string()),
    group_id: nullable(string()),
    effective_group_id: nullable(string()),
    session_id: nullable(number())
});
// aggregate info
const StaticInfo = object({
    hostname: nullable(string()),
    kernel_version: nullable(string()),
    os_version: nullable(string()),
    name: nullable(string())
});
const MemoryInfo = object({
    total_memory: number(),
    used_memory: number(),
    total_swap: number(),
    used_swap: number()
});
const CpuInfo = object({
    cpus: array(Cpu),
    cpu_count: number()
});
const AllSystemInfo = object({
    hostname: nullable(string()),
    kernel_version: nullable(string()),
    os_version: nullable(string()),
    name: nullable(string()),
    total_memory: number(),
    used_memory: number(),
    total_swap: number(),
    used_swap: number(),
    cpus: array(Cpu),
    cpu_count: number(),
    disks: array(Disk),
    networks: array(Network),
    components: array(Component),
    processes: array(Process),
    batteries: Batteries
});

export { AllSystemInfo, Batteries, Battery, BatteryState, BatteryTechnology, Component, Cpu, CpuInfo, Disk, DiskKind, DiskUsage, MacAddress, MemoryInfo, Network, Process, ProcessStatus, StaticInfo, allSysInfo, batteries, components, cpuCount, cpuInfo, cpus, debugCommand, disks, hostname, kernelVersion, memoryInfo, name, networks, osVersion, processes, refreshAll, refreshCpu, refreshMemory, refreshProcesses, staticInfo, totalMemory, totalSwap, usedMemory, usedSwap };
