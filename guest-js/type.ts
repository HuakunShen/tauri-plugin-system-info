import {
  array,
  boolean,
  enum_,
  length,
  literal,
  nullable,
  number,
  object,
  pipe,
  string,
  union,
  type InferOutput,
} from "valibot";

enum BatteryStateEnum {
  Unknown = "Unknown",
  Charging = "Charging",
  Discharging = "Discharging",
  Empty = "Empty",
  Full = "Full",
}

export const BatteryState = enum_(BatteryStateEnum);
export type BatteryState = InferOutput<typeof BatteryState>;

enum BatteryTechnologyEnum {
  Unknown = "Unknown",
  LithiumIon = "LithiumIon",
  LeadAcid = "LeadAcid",
  LithiumPolymer = "LithiumPolymer",
  NickelMetalHydride = "NickelMetalHydride",
  NickelCadmium = "NickelCadmium",
  NickelZinc = "NickelZinc",
  LithiumIronPhosphate = "LithiumIronPhosphate",
  RechargeableAlkalineManganese = "RechargeableAlkalineManganese",
}
export const BatteryTechnology = enum_(BatteryTechnologyEnum);
export type BatteryTechnology = InferOutput<typeof BatteryTechnology>;

export const Battery = object({
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
  time_to_empty: nullable(number()),
});
export type Battery = InferOutput<typeof Battery>;

export const Batteries = array(Battery);
export type Batteries = InferOutput<typeof Batteries>;

// TODO: verify actual value returned from rust for "Unknown" enum

// export const DiskKind = enum_(["HDD", "SSD", "Unknown"]);
export const DiskKind = union([
  literal("HDD"),
  literal("SSD"),
  object({
    Unknown: number(),
  }),
]);
export type DiskKind = InferOutput<typeof DiskKind>;

export const MacAddress = pipe(array(number()), length(6));
export type MacAddress = InferOutput<typeof MacAddress>;

export const ProcessStatus = union([
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
    Unknown: number(),
  }),
]);
export type ProcessStatus = InferOutput<typeof ProcessStatus>;

export const DiskUsage = object({
  total_written_bytes: number(),
  written_bytes: number(),
  total_read_bytes: number(),
  read_bytes: number(),
});
export type DiskUsage = InferOutput<typeof DiskUsage>;

export const Cpu = object({
  name: string(),
  frequency: number(),
  cpu_usage: number(),
  vendor_id: string(),
  brand: string(),
});
export type Cpu = InferOutput<typeof Cpu>;

export const Disk = object({
  kind: DiskKind,
  name: string(),
  file_system: string(),
  mount_point: string(),
  total_space: number(),
  available_space: number(),
  is_removable: boolean(),
});
export type Disk = InferOutput<typeof Disk>;

export const Network = object({
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
  mac_address_str: string(),
});
export type Network = InferOutput<typeof Network>;

export const Component = object({
  temperature: number(),
  max: number(),
  critical: nullable(number()),
  label: string(),
});
export type Component = InferOutput<typeof Component>;

export const Process = object({
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
  session_id: nullable(number()),
});
export type Process = InferOutput<typeof Process>;

// aggregate info
export const StaticInfo = object({
  hostname: nullable(string()),
  kernel_version: nullable(string()),
  os_version: nullable(string()),
  name: nullable(string()),
});
export type StaticInfo = InferOutput<typeof StaticInfo>;

export const MemoryInfo = object({
  total_memory: number(),
  used_memory: number(),
  total_swap: number(),
  used_swap: number(),
});
export type MemoryInfo = InferOutput<typeof MemoryInfo>;

export const CpuInfo = object({
  cpus: array(Cpu),
  cpu_count: number(),
});
export type CpuInfo = InferOutput<typeof CpuInfo>;

export const AllSystemInfo = object({
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
  batteries: Batteries,
});
export type AllSystemInfo = InferOutput<typeof AllSystemInfo>;

export const LoadAverage = object({
  one: number(),
  five: number(),
  fifteen: number(),
});
export type LoadAverage = InferOutput<typeof LoadAverage>;
