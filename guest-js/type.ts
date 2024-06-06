import { z } from "zod";

export const BatteryState = z.enum([
  "Unknown",
  "Charging",
  "Discharging",
  "Empty",
  "Full",
]);
export type BatteryState = z.infer<typeof BatteryState>;

export const BatteryTechnology = z.enum([
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
export type BatteryTechnology = z.infer<typeof BatteryTechnology>;

export const Battery = z.object({
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
export type Battery = z.infer<typeof Battery>;

export const Batteries = Battery.array();
export type Batteries = z.infer<typeof Batteries>;

// TODO: verify actual value returned from rust for "Unknown" enum

// export const DiskKind = z.enum(["HDD", "SSD", "Unknown"]);
export const DiskKind = z.union([
  z.literal("HDD"),
  z.literal("SSD"),
  z.object({
    Unknown: z.number(),
  }),
]);
export type DiskKind = z.infer<typeof DiskKind>;

export const MacAddress = z.number().array().length(6);
export type MacAddress = z.infer<typeof MacAddress>;

export const ProcessStatus = z.union([
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
export type ProcessStatus = z.infer<typeof ProcessStatus>;

export const DiskUsage = z.object({
  total_written_bytes: z.number(),
  written_bytes: z.number(),
  total_read_bytes: z.number(),
  read_bytes: z.number(),
});
export type DiskUsage = z.infer<typeof DiskUsage>;

export const Cpu = z.object({
  name: z.string(),
  frequency: z.number(),
  cpu_usage: z.number(),
  vendor_id: z.string(),
  brand: z.string(),
});
export type Cpu = z.infer<typeof Cpu>;

export const Disk = z.object({
  kind: DiskKind,
  name: z.string(),
  file_system: z.string(),
  mount_point: z.string(),
  total_space: z.number(),
  available_space: z.number(),
  is_removable: z.boolean(),
});
export type Disk = z.infer<typeof Disk>;

export const Network = z.object({
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
export type Network = z.infer<typeof Network>;

export const Component = z.object({
  temperature: z.number(),
  max: z.number(),
  critical: z.number().nullable(),
  label: z.string(),
});
export type Component = z.infer<typeof Component>;

export const Process = z.object({
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
export type Process = z.infer<typeof Process>;

// aggregate info
export const StaticInfo = z.object({
  hostname: z.string().nullable(),
  kernel_version: z.string().nullable(),
  os_version: z.string().nullable(),
  name: z.string().nullable(),
});
export type StaticInfo = z.infer<typeof StaticInfo>;

export const MemoryInfo = z.object({
  total_memory: z.number(),
  used_memory: z.number(),
  total_swap: z.number(),
  used_swap: z.number(),
});
export type MemoryInfo = z.infer<typeof MemoryInfo>;

export const CpuInfo = z.object({
  cpus: Cpu.array(),
  cpu_count: z.number(),
});
export type CpuInfo = z.infer<typeof CpuInfo>;

export const AllSystemInfo = z.object({
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
export type AllSystemInfo = z.infer<typeof AllSystemInfo>;
