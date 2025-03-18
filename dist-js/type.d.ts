import { type InferOutput } from "valibot";
declare enum BatteryStateEnum {
    Unknown = "Unknown",
    Charging = "Charging",
    Discharging = "Discharging",
    Empty = "Empty",
    Full = "Full"
}
export declare const BatteryState: import("valibot").EnumSchema<typeof BatteryStateEnum, undefined>;
export type BatteryState = InferOutput<typeof BatteryState>;
declare enum BatteryTechnologyEnum {
    Unknown = "Unknown",
    LithiumIon = "LithiumIon",
    LeadAcid = "LeadAcid",
    LithiumPolymer = "LithiumPolymer",
    NickelMetalHydride = "NickelMetalHydride",
    NickelCadmium = "NickelCadmium",
    NickelZinc = "NickelZinc",
    LithiumIronPhosphate = "LithiumIronPhosphate",
    RechargeableAlkalineManganese = "RechargeableAlkalineManganese"
}
export declare const BatteryTechnology: import("valibot").EnumSchema<typeof BatteryTechnologyEnum, undefined>;
export type BatteryTechnology = InferOutput<typeof BatteryTechnology>;
export declare const Battery: import("valibot").ObjectSchema<{
    readonly state_of_charge: import("valibot").NumberSchema<undefined>;
    readonly energy: import("valibot").NumberSchema<undefined>;
    readonly energy_full: import("valibot").NumberSchema<undefined>;
    readonly energy_full_design: import("valibot").NumberSchema<undefined>;
    readonly energy_rate: import("valibot").NumberSchema<undefined>;
    readonly voltage: import("valibot").NumberSchema<undefined>;
    readonly state_of_health: import("valibot").NumberSchema<undefined>;
    readonly state: import("valibot").EnumSchema<typeof BatteryStateEnum, undefined>;
    readonly technology: import("valibot").EnumSchema<typeof BatteryTechnologyEnum, undefined>;
    readonly temperature_kelvin: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly temperature_celsius: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly temperature_fahrenheit: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cycle_count: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly vendor: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly model: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly serial_number: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly time_to_full: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly time_to_empty: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type Battery = InferOutput<typeof Battery>;
export declare const Batteries: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
    readonly state_of_charge: import("valibot").NumberSchema<undefined>;
    readonly energy: import("valibot").NumberSchema<undefined>;
    readonly energy_full: import("valibot").NumberSchema<undefined>;
    readonly energy_full_design: import("valibot").NumberSchema<undefined>;
    readonly energy_rate: import("valibot").NumberSchema<undefined>;
    readonly voltage: import("valibot").NumberSchema<undefined>;
    readonly state_of_health: import("valibot").NumberSchema<undefined>;
    readonly state: import("valibot").EnumSchema<typeof BatteryStateEnum, undefined>;
    readonly technology: import("valibot").EnumSchema<typeof BatteryTechnologyEnum, undefined>;
    readonly temperature_kelvin: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly temperature_celsius: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly temperature_fahrenheit: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cycle_count: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly vendor: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly model: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly serial_number: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly time_to_full: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly time_to_empty: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>, undefined>;
export type Batteries = InferOutput<typeof Batteries>;
export declare const DiskKind: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"HDD", undefined>, import("valibot").LiteralSchema<"SSD", undefined>, import("valibot").ObjectSchema<{
    readonly Unknown: import("valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type DiskKind = InferOutput<typeof DiskKind>;
export declare const MacAddress: import("valibot").SchemaWithPipe<[import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>, import("valibot").LengthAction<number[], 6, undefined>]>;
export type MacAddress = InferOutput<typeof MacAddress>;
export declare const ProcessStatus: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"Idle", undefined>, import("valibot").LiteralSchema<"Run", undefined>, import("valibot").LiteralSchema<"Sleep", undefined>, import("valibot").LiteralSchema<"Stop", undefined>, import("valibot").LiteralSchema<"Zombie", undefined>, import("valibot").LiteralSchema<"Tracing", undefined>, import("valibot").LiteralSchema<"Dead", undefined>, import("valibot").LiteralSchema<"Wakekill", undefined>, import("valibot").LiteralSchema<"Waking", undefined>, import("valibot").LiteralSchema<"Parked", undefined>, import("valibot").LiteralSchema<"LockBlocked", undefined>, import("valibot").LiteralSchema<"UninterruptibleDiskSleep", undefined>, import("valibot").ObjectSchema<{
    readonly Unknown: import("valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type ProcessStatus = InferOutput<typeof ProcessStatus>;
export declare const DiskUsage: import("valibot").ObjectSchema<{
    readonly total_written_bytes: import("valibot").NumberSchema<undefined>;
    readonly written_bytes: import("valibot").NumberSchema<undefined>;
    readonly total_read_bytes: import("valibot").NumberSchema<undefined>;
    readonly read_bytes: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type DiskUsage = InferOutput<typeof DiskUsage>;
export declare const Cpu: import("valibot").ObjectSchema<{
    readonly name: import("valibot").StringSchema<undefined>;
    readonly frequency: import("valibot").NumberSchema<undefined>;
    readonly cpu_usage: import("valibot").NumberSchema<undefined>;
    readonly vendor_id: import("valibot").StringSchema<undefined>;
    readonly brand: import("valibot").StringSchema<undefined>;
}, undefined>;
export type Cpu = InferOutput<typeof Cpu>;
export declare const Disk: import("valibot").ObjectSchema<{
    readonly kind: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"HDD", undefined>, import("valibot").LiteralSchema<"SSD", undefined>, import("valibot").ObjectSchema<{
        readonly Unknown: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly name: import("valibot").StringSchema<undefined>;
    readonly file_system: import("valibot").StringSchema<undefined>;
    readonly mount_point: import("valibot").StringSchema<undefined>;
    readonly total_space: import("valibot").NumberSchema<undefined>;
    readonly available_space: import("valibot").NumberSchema<undefined>;
    readonly is_removable: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export type Disk = InferOutput<typeof Disk>;
export declare const Network: import("valibot").ObjectSchema<{
    readonly interface_name: import("valibot").StringSchema<undefined>;
    readonly received: import("valibot").NumberSchema<undefined>;
    readonly total_received: import("valibot").NumberSchema<undefined>;
    readonly transmitted: import("valibot").NumberSchema<undefined>;
    readonly total_transmitted: import("valibot").NumberSchema<undefined>;
    readonly packets_received: import("valibot").NumberSchema<undefined>;
    readonly total_packets_received: import("valibot").NumberSchema<undefined>;
    readonly packets_transmitted: import("valibot").NumberSchema<undefined>;
    readonly total_packets_transmitted: import("valibot").NumberSchema<undefined>;
    readonly errors_on_received: import("valibot").NumberSchema<undefined>;
    readonly total_errors_on_received: import("valibot").NumberSchema<undefined>;
    readonly errors_on_transmitted: import("valibot").NumberSchema<undefined>;
    readonly total_errors_on_transmitted: import("valibot").NumberSchema<undefined>;
    readonly mac_address: import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly mac_address_str: import("valibot").StringSchema<undefined>;
}, undefined>;
export type Network = InferOutput<typeof Network>;
export declare const Component: import("valibot").ObjectSchema<{
    readonly temperature: import("valibot").NumberSchema<undefined>;
    readonly max: import("valibot").NumberSchema<undefined>;
    readonly critical: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly label: import("valibot").StringSchema<undefined>;
}, undefined>;
export type Component = InferOutput<typeof Component>;
export declare const Process: import("valibot").ObjectSchema<{
    readonly name: import("valibot").StringSchema<undefined>;
    readonly cmd: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly exe: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly pid: import("valibot").NumberSchema<undefined>;
    readonly environ: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly cwd: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly root: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly memory: import("valibot").NumberSchema<undefined>;
    readonly virtual_memory: import("valibot").NumberSchema<undefined>;
    readonly parent: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"Idle", undefined>, import("valibot").LiteralSchema<"Run", undefined>, import("valibot").LiteralSchema<"Sleep", undefined>, import("valibot").LiteralSchema<"Stop", undefined>, import("valibot").LiteralSchema<"Zombie", undefined>, import("valibot").LiteralSchema<"Tracing", undefined>, import("valibot").LiteralSchema<"Dead", undefined>, import("valibot").LiteralSchema<"Wakekill", undefined>, import("valibot").LiteralSchema<"Waking", undefined>, import("valibot").LiteralSchema<"Parked", undefined>, import("valibot").LiteralSchema<"LockBlocked", undefined>, import("valibot").LiteralSchema<"UninterruptibleDiskSleep", undefined>, import("valibot").ObjectSchema<{
        readonly Unknown: import("valibot").NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly start_time: import("valibot").NumberSchema<undefined>;
    readonly run_time: import("valibot").NumberSchema<undefined>;
    readonly cpu_usage: import("valibot").NumberSchema<undefined>;
    readonly disk_usage: import("valibot").ObjectSchema<{
        readonly total_written_bytes: import("valibot").NumberSchema<undefined>;
        readonly written_bytes: import("valibot").NumberSchema<undefined>;
        readonly total_read_bytes: import("valibot").NumberSchema<undefined>;
        readonly read_bytes: import("valibot").NumberSchema<undefined>;
    }, undefined>;
    readonly user_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly effective_user_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly group_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly effective_group_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly session_id: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type Process = InferOutput<typeof Process>;
export declare const StaticInfo: import("valibot").ObjectSchema<{
    readonly hostname: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly kernel_version: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly os_version: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly name: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type StaticInfo = InferOutput<typeof StaticInfo>;
export declare const MemoryInfo: import("valibot").ObjectSchema<{
    readonly total_memory: import("valibot").NumberSchema<undefined>;
    readonly used_memory: import("valibot").NumberSchema<undefined>;
    readonly total_swap: import("valibot").NumberSchema<undefined>;
    readonly used_swap: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type MemoryInfo = InferOutput<typeof MemoryInfo>;
export declare const CpuInfo: import("valibot").ObjectSchema<{
    readonly cpus: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly name: import("valibot").StringSchema<undefined>;
        readonly frequency: import("valibot").NumberSchema<undefined>;
        readonly cpu_usage: import("valibot").NumberSchema<undefined>;
        readonly vendor_id: import("valibot").StringSchema<undefined>;
        readonly brand: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly cpu_count: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type CpuInfo = InferOutput<typeof CpuInfo>;
export declare const AllSystemInfo: import("valibot").ObjectSchema<{
    readonly hostname: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly kernel_version: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly os_version: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly name: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly total_memory: import("valibot").NumberSchema<undefined>;
    readonly used_memory: import("valibot").NumberSchema<undefined>;
    readonly total_swap: import("valibot").NumberSchema<undefined>;
    readonly used_swap: import("valibot").NumberSchema<undefined>;
    readonly cpus: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly name: import("valibot").StringSchema<undefined>;
        readonly frequency: import("valibot").NumberSchema<undefined>;
        readonly cpu_usage: import("valibot").NumberSchema<undefined>;
        readonly vendor_id: import("valibot").StringSchema<undefined>;
        readonly brand: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly cpu_count: import("valibot").NumberSchema<undefined>;
    readonly disks: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly kind: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"HDD", undefined>, import("valibot").LiteralSchema<"SSD", undefined>, import("valibot").ObjectSchema<{
            readonly Unknown: import("valibot").NumberSchema<undefined>;
        }, undefined>], undefined>;
        readonly name: import("valibot").StringSchema<undefined>;
        readonly file_system: import("valibot").StringSchema<undefined>;
        readonly mount_point: import("valibot").StringSchema<undefined>;
        readonly total_space: import("valibot").NumberSchema<undefined>;
        readonly available_space: import("valibot").NumberSchema<undefined>;
        readonly is_removable: import("valibot").BooleanSchema<undefined>;
    }, undefined>, undefined>;
    readonly networks: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly interface_name: import("valibot").StringSchema<undefined>;
        readonly received: import("valibot").NumberSchema<undefined>;
        readonly total_received: import("valibot").NumberSchema<undefined>;
        readonly transmitted: import("valibot").NumberSchema<undefined>;
        readonly total_transmitted: import("valibot").NumberSchema<undefined>;
        readonly packets_received: import("valibot").NumberSchema<undefined>;
        readonly total_packets_received: import("valibot").NumberSchema<undefined>;
        readonly packets_transmitted: import("valibot").NumberSchema<undefined>;
        readonly total_packets_transmitted: import("valibot").NumberSchema<undefined>;
        readonly errors_on_received: import("valibot").NumberSchema<undefined>;
        readonly total_errors_on_received: import("valibot").NumberSchema<undefined>;
        readonly errors_on_transmitted: import("valibot").NumberSchema<undefined>;
        readonly total_errors_on_transmitted: import("valibot").NumberSchema<undefined>;
        readonly mac_address: import("valibot").ArraySchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly mac_address_str: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly components: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly temperature: import("valibot").NumberSchema<undefined>;
        readonly max: import("valibot").NumberSchema<undefined>;
        readonly critical: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly label: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly processes: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly name: import("valibot").StringSchema<undefined>;
        readonly cmd: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly exe: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly pid: import("valibot").NumberSchema<undefined>;
        readonly environ: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly cwd: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly root: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly memory: import("valibot").NumberSchema<undefined>;
        readonly virtual_memory: import("valibot").NumberSchema<undefined>;
        readonly parent: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly status: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"Idle", undefined>, import("valibot").LiteralSchema<"Run", undefined>, import("valibot").LiteralSchema<"Sleep", undefined>, import("valibot").LiteralSchema<"Stop", undefined>, import("valibot").LiteralSchema<"Zombie", undefined>, import("valibot").LiteralSchema<"Tracing", undefined>, import("valibot").LiteralSchema<"Dead", undefined>, import("valibot").LiteralSchema<"Wakekill", undefined>, import("valibot").LiteralSchema<"Waking", undefined>, import("valibot").LiteralSchema<"Parked", undefined>, import("valibot").LiteralSchema<"LockBlocked", undefined>, import("valibot").LiteralSchema<"UninterruptibleDiskSleep", undefined>, import("valibot").ObjectSchema<{
            readonly Unknown: import("valibot").NumberSchema<undefined>;
        }, undefined>], undefined>;
        readonly start_time: import("valibot").NumberSchema<undefined>;
        readonly run_time: import("valibot").NumberSchema<undefined>;
        readonly cpu_usage: import("valibot").NumberSchema<undefined>;
        readonly disk_usage: import("valibot").ObjectSchema<{
            readonly total_written_bytes: import("valibot").NumberSchema<undefined>;
            readonly written_bytes: import("valibot").NumberSchema<undefined>;
            readonly total_read_bytes: import("valibot").NumberSchema<undefined>;
            readonly read_bytes: import("valibot").NumberSchema<undefined>;
        }, undefined>;
        readonly user_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly effective_user_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly group_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly effective_group_id: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly session_id: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly batteries: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly state_of_charge: import("valibot").NumberSchema<undefined>;
        readonly energy: import("valibot").NumberSchema<undefined>;
        readonly energy_full: import("valibot").NumberSchema<undefined>;
        readonly energy_full_design: import("valibot").NumberSchema<undefined>;
        readonly energy_rate: import("valibot").NumberSchema<undefined>;
        readonly voltage: import("valibot").NumberSchema<undefined>;
        readonly state_of_health: import("valibot").NumberSchema<undefined>;
        readonly state: import("valibot").EnumSchema<typeof BatteryStateEnum, undefined>;
        readonly technology: import("valibot").EnumSchema<typeof BatteryTechnologyEnum, undefined>;
        readonly temperature_kelvin: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly temperature_celsius: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly temperature_fahrenheit: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly cycle_count: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly vendor: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly model: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly serial_number: import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly time_to_full: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly time_to_empty: import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type AllSystemInfo = InferOutput<typeof AllSystemInfo>;
export declare const LoadAverage: import("valibot").ObjectSchema<{
    readonly one: import("valibot").NumberSchema<undefined>;
    readonly five: import("valibot").NumberSchema<undefined>;
    readonly fifteen: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type LoadAverage = InferOutput<typeof LoadAverage>;
export {};
//# sourceMappingURL=type.d.ts.map