'use strict';

var core = require('@tauri-apps/api/core');
var valibot = require('valibot');

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
function uptime() {
    return core.invoke("plugin:system-info|uptime");
}
function loadAverage() {
    return core.invoke("plugin:system-info|load_average");
}

var BatteryStateEnum;
(function (BatteryStateEnum) {
    BatteryStateEnum["Unknown"] = "Unknown";
    BatteryStateEnum["Charging"] = "Charging";
    BatteryStateEnum["Discharging"] = "Discharging";
    BatteryStateEnum["Empty"] = "Empty";
    BatteryStateEnum["Full"] = "Full";
})(BatteryStateEnum || (BatteryStateEnum = {}));
const BatteryState = valibot.enum_(BatteryStateEnum);
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
const BatteryTechnology = valibot.enum_(BatteryTechnologyEnum);
const Battery = valibot.object({
    state_of_charge: valibot.number(),
    energy: valibot.number(),
    energy_full: valibot.number(),
    energy_full_design: valibot.number(),
    energy_rate: valibot.number(),
    // .describe("Amount of energy being drained from the battery."),
    voltage: valibot.number(),
    state_of_health: valibot.number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelvin: valibot.nullable(valibot.number()),
    temperature_celsius: valibot.nullable(valibot.number()),
    temperature_fahrenheit: valibot.nullable(valibot.number()),
    cycle_count: valibot.nullable(valibot.number()),
    vendor: valibot.nullable(valibot.string()),
    model: valibot.nullable(valibot.string()),
    serial_number: valibot.nullable(valibot.string()),
    time_to_full: valibot.nullable(valibot.number()),
    time_to_empty: valibot.nullable(valibot.number()),
});
const Batteries = valibot.array(Battery);
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = enum_(["HDD", "SSD", "Unknown"]);
const DiskKind = valibot.union([
    valibot.literal("HDD"),
    valibot.literal("SSD"),
    valibot.object({
        Unknown: valibot.number(),
    }),
]);
const MacAddress = valibot.pipe(valibot.array(valibot.number()), valibot.length(6));
const ProcessStatus = valibot.union([
    valibot.literal("Idle"),
    valibot.literal("Run"),
    valibot.literal("Sleep"),
    valibot.literal("Stop"),
    valibot.literal("Zombie"),
    valibot.literal("Tracing"),
    valibot.literal("Dead"),
    valibot.literal("Wakekill"),
    valibot.literal("Waking"),
    valibot.literal("Parked"),
    valibot.literal("LockBlocked"),
    valibot.literal("UninterruptibleDiskSleep"),
    valibot.object({
        Unknown: valibot.number(),
    }),
]);
const DiskUsage = valibot.object({
    total_written_bytes: valibot.number(),
    written_bytes: valibot.number(),
    total_read_bytes: valibot.number(),
    read_bytes: valibot.number(),
});
const Cpu = valibot.object({
    name: valibot.string(),
    frequency: valibot.number(),
    cpu_usage: valibot.number(),
    vendor_id: valibot.string(),
    brand: valibot.string(),
});
const Disk = valibot.object({
    kind: DiskKind,
    name: valibot.string(),
    file_system: valibot.string(),
    mount_point: valibot.string(),
    total_space: valibot.number(),
    available_space: valibot.number(),
    is_removable: valibot.boolean(),
});
const Network = valibot.object({
    interface_name: valibot.string(),
    received: valibot.number(),
    total_received: valibot.number(),
    transmitted: valibot.number(),
    total_transmitted: valibot.number(),
    packets_received: valibot.number(),
    total_packets_received: valibot.number(),
    packets_transmitted: valibot.number(),
    total_packets_transmitted: valibot.number(),
    errors_on_received: valibot.number(),
    total_errors_on_received: valibot.number(),
    errors_on_transmitted: valibot.number(),
    total_errors_on_transmitted: valibot.number(),
    mac_address: valibot.array(valibot.number()),
    mac_address_str: valibot.string(),
});
const Component = valibot.object({
    temperature: valibot.number(),
    max: valibot.number(),
    critical: valibot.nullable(valibot.number()),
    label: valibot.string(),
});
const Process = valibot.object({
    name: valibot.string(),
    cmd: valibot.array(valibot.string()),
    exe: valibot.nullable(valibot.string()),
    pid: valibot.number(),
    environ: valibot.array(valibot.string()),
    cwd: valibot.nullable(valibot.string()),
    root: valibot.nullable(valibot.string()),
    memory: valibot.number(),
    virtual_memory: valibot.number(),
    parent: valibot.nullable(valibot.number()),
    status: ProcessStatus,
    start_time: valibot.number(),
    run_time: valibot.number(),
    cpu_usage: valibot.number(),
    disk_usage: DiskUsage,
    user_id: valibot.nullable(valibot.string()),
    effective_user_id: valibot.nullable(valibot.string()),
    group_id: valibot.nullable(valibot.string()),
    effective_group_id: valibot.nullable(valibot.string()),
    session_id: valibot.nullable(valibot.number()),
});
// aggregate info
const StaticInfo = valibot.object({
    hostname: valibot.nullable(valibot.string()),
    kernel_version: valibot.nullable(valibot.string()),
    os_version: valibot.nullable(valibot.string()),
    name: valibot.nullable(valibot.string()),
});
const MemoryInfo = valibot.object({
    total_memory: valibot.number(),
    used_memory: valibot.number(),
    total_swap: valibot.number(),
    used_swap: valibot.number(),
});
const CpuInfo = valibot.object({
    cpus: valibot.array(Cpu),
    cpu_count: valibot.number(),
});
const AllSystemInfo = valibot.object({
    hostname: valibot.nullable(valibot.string()),
    kernel_version: valibot.nullable(valibot.string()),
    os_version: valibot.nullable(valibot.string()),
    name: valibot.nullable(valibot.string()),
    total_memory: valibot.number(),
    used_memory: valibot.number(),
    total_swap: valibot.number(),
    used_swap: valibot.number(),
    cpus: valibot.array(Cpu),
    cpu_count: valibot.number(),
    disks: valibot.array(Disk),
    networks: valibot.array(Network),
    components: valibot.array(Component),
    processes: valibot.array(Process),
    batteries: Batteries,
});
const LoadAverage = valibot.object({
    one: valibot.number(),
    five: valibot.number(),
    fifteen: valibot.number(),
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
exports.LoadAverage = LoadAverage;
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
exports.loadAverage = loadAverage;
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
exports.uptime = uptime;
exports.usedMemory = usedMemory;
exports.usedSwap = usedSwap;
