import { z } from "zod";
export declare const BatteryState: z.ZodEnum<["Unknown", "Charging", "Discharging", "Empty", "Full"]>;
export type BatteryState = z.infer<typeof BatteryState>;
export declare const BatteryTechnology: z.ZodEnum<["Unknown", "LithiumIon", "LeadAcid", "LithiumPolymer", "NickelMetalHydride", "NickelCadmium", "NickelZinc", "LithiumIronPhosphate", "RechargeableAlkalineManganese"]>;
export type BatteryTechnology = z.infer<typeof BatteryTechnology>;
export declare const Battery: z.ZodObject<{
    state_of_charge: z.ZodNumber;
    energy: z.ZodNumber;
    energy_full: z.ZodNumber;
    energy_full_design: z.ZodNumber;
    energy_rate: z.ZodNumber;
    voltage: z.ZodNumber;
    state_of_health: z.ZodNumber;
    state: z.ZodEnum<["Unknown", "Charging", "Discharging", "Empty", "Full"]>;
    technology: z.ZodEnum<["Unknown", "LithiumIon", "LeadAcid", "LithiumPolymer", "NickelMetalHydride", "NickelCadmium", "NickelZinc", "LithiumIronPhosphate", "RechargeableAlkalineManganese"]>;
    temperature_kelin: z.ZodNullable<z.ZodNumber>;
    temperature_celsius: z.ZodNullable<z.ZodNumber>;
    temperature_fahrenheit: z.ZodNullable<z.ZodNumber>;
    cycle_count: z.ZodNullable<z.ZodNumber>;
    vendor: z.ZodNullable<z.ZodString>;
    model: z.ZodNullable<z.ZodString>;
    serial_number: z.ZodNullable<z.ZodString>;
    time_to_full: z.ZodNullable<z.ZodNumber>;
    time_to_empty: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    state_of_charge: number;
    energy: number;
    energy_full: number;
    energy_full_design: number;
    energy_rate: number;
    voltage: number;
    state_of_health: number;
    state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
    technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
    temperature_kelin: number | null;
    temperature_celsius: number | null;
    temperature_fahrenheit: number | null;
    cycle_count: number | null;
    vendor: string | null;
    model: string | null;
    serial_number: string | null;
    time_to_full: number | null;
    time_to_empty: number | null;
}, {
    state_of_charge: number;
    energy: number;
    energy_full: number;
    energy_full_design: number;
    energy_rate: number;
    voltage: number;
    state_of_health: number;
    state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
    technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
    temperature_kelin: number | null;
    temperature_celsius: number | null;
    temperature_fahrenheit: number | null;
    cycle_count: number | null;
    vendor: string | null;
    model: string | null;
    serial_number: string | null;
    time_to_full: number | null;
    time_to_empty: number | null;
}>;
export type Battery = z.infer<typeof Battery>;
export declare const Batteries: z.ZodArray<z.ZodObject<{
    state_of_charge: z.ZodNumber;
    energy: z.ZodNumber;
    energy_full: z.ZodNumber;
    energy_full_design: z.ZodNumber;
    energy_rate: z.ZodNumber;
    voltage: z.ZodNumber;
    state_of_health: z.ZodNumber;
    state: z.ZodEnum<["Unknown", "Charging", "Discharging", "Empty", "Full"]>;
    technology: z.ZodEnum<["Unknown", "LithiumIon", "LeadAcid", "LithiumPolymer", "NickelMetalHydride", "NickelCadmium", "NickelZinc", "LithiumIronPhosphate", "RechargeableAlkalineManganese"]>;
    temperature_kelin: z.ZodNullable<z.ZodNumber>;
    temperature_celsius: z.ZodNullable<z.ZodNumber>;
    temperature_fahrenheit: z.ZodNullable<z.ZodNumber>;
    cycle_count: z.ZodNullable<z.ZodNumber>;
    vendor: z.ZodNullable<z.ZodString>;
    model: z.ZodNullable<z.ZodString>;
    serial_number: z.ZodNullable<z.ZodString>;
    time_to_full: z.ZodNullable<z.ZodNumber>;
    time_to_empty: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    state_of_charge: number;
    energy: number;
    energy_full: number;
    energy_full_design: number;
    energy_rate: number;
    voltage: number;
    state_of_health: number;
    state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
    technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
    temperature_kelin: number | null;
    temperature_celsius: number | null;
    temperature_fahrenheit: number | null;
    cycle_count: number | null;
    vendor: string | null;
    model: string | null;
    serial_number: string | null;
    time_to_full: number | null;
    time_to_empty: number | null;
}, {
    state_of_charge: number;
    energy: number;
    energy_full: number;
    energy_full_design: number;
    energy_rate: number;
    voltage: number;
    state_of_health: number;
    state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
    technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
    temperature_kelin: number | null;
    temperature_celsius: number | null;
    temperature_fahrenheit: number | null;
    cycle_count: number | null;
    vendor: string | null;
    model: string | null;
    serial_number: string | null;
    time_to_full: number | null;
    time_to_empty: number | null;
}>, "many">;
export type Batteries = z.infer<typeof Batteries>;
export declare const DiskKind: z.ZodUnion<[z.ZodLiteral<"HDD">, z.ZodLiteral<"SSD">, z.ZodObject<{
    Unknown: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Unknown: number;
}, {
    Unknown: number;
}>]>;
export type DiskKind = z.infer<typeof DiskKind>;
export declare const MacAddress: z.ZodArray<z.ZodNumber, "many">;
export type MacAddress = z.infer<typeof MacAddress>;
export declare const ProcessStatus: z.ZodUnion<[z.ZodLiteral<"Idle">, z.ZodLiteral<"Run">, z.ZodLiteral<"Sleep">, z.ZodLiteral<"Stop">, z.ZodLiteral<"Zombie">, z.ZodLiteral<"Tracing">, z.ZodLiteral<"Dead">, z.ZodLiteral<"Wakekill">, z.ZodLiteral<"Waking">, z.ZodLiteral<"Parked">, z.ZodLiteral<"LockBlocked">, z.ZodLiteral<"UninterruptibleDiskSleep">, z.ZodObject<{
    Unknown: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Unknown: number;
}, {
    Unknown: number;
}>]>;
export type ProcessStatus = z.infer<typeof ProcessStatus>;
export declare const DiskUsage: z.ZodObject<{
    total_written_bytes: z.ZodNumber;
    written_bytes: z.ZodNumber;
    total_read_bytes: z.ZodNumber;
    read_bytes: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    total_written_bytes: number;
    written_bytes: number;
    total_read_bytes: number;
    read_bytes: number;
}, {
    total_written_bytes: number;
    written_bytes: number;
    total_read_bytes: number;
    read_bytes: number;
}>;
export type DiskUsage = z.infer<typeof DiskUsage>;
export declare const Cpu: z.ZodObject<{
    name: z.ZodString;
    frequency: z.ZodNumber;
    cpu_usage: z.ZodNumber;
    vendor_id: z.ZodString;
    brand: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    frequency: number;
    cpu_usage: number;
    vendor_id: string;
    brand: string;
}, {
    name: string;
    frequency: number;
    cpu_usage: number;
    vendor_id: string;
    brand: string;
}>;
export type Cpu = z.infer<typeof Cpu>;
export declare const Disk: z.ZodObject<{
    kind: z.ZodUnion<[z.ZodLiteral<"HDD">, z.ZodLiteral<"SSD">, z.ZodObject<{
        Unknown: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        Unknown: number;
    }, {
        Unknown: number;
    }>]>;
    name: z.ZodString;
    file_system: z.ZodString;
    mount_point: z.ZodString;
    total_space: z.ZodNumber;
    available_space: z.ZodNumber;
    is_removable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    kind: "HDD" | "SSD" | {
        Unknown: number;
    };
    file_system: string;
    mount_point: string;
    total_space: number;
    available_space: number;
    is_removable: boolean;
}, {
    name: string;
    kind: "HDD" | "SSD" | {
        Unknown: number;
    };
    file_system: string;
    mount_point: string;
    total_space: number;
    available_space: number;
    is_removable: boolean;
}>;
export type Disk = z.infer<typeof Disk>;
export declare const Network: z.ZodObject<{
    interface_name: z.ZodString;
    received: z.ZodNumber;
    total_received: z.ZodNumber;
    transmitted: z.ZodNumber;
    total_transmitted: z.ZodNumber;
    packets_received: z.ZodNumber;
    total_packets_received: z.ZodNumber;
    packets_transmitted: z.ZodNumber;
    total_packets_transmitted: z.ZodNumber;
    errors_on_received: z.ZodNumber;
    total_errors_on_received: z.ZodNumber;
    errors_on_transmitted: z.ZodNumber;
    total_errors_on_transmitted: z.ZodNumber;
    mac_address: z.ZodArray<z.ZodNumber, "many">;
    mac_address_str: z.ZodString;
}, "strip", z.ZodTypeAny, {
    received: number;
    interface_name: string;
    total_received: number;
    transmitted: number;
    total_transmitted: number;
    packets_received: number;
    total_packets_received: number;
    packets_transmitted: number;
    total_packets_transmitted: number;
    errors_on_received: number;
    total_errors_on_received: number;
    errors_on_transmitted: number;
    total_errors_on_transmitted: number;
    mac_address: number[];
    mac_address_str: string;
}, {
    received: number;
    interface_name: string;
    total_received: number;
    transmitted: number;
    total_transmitted: number;
    packets_received: number;
    total_packets_received: number;
    packets_transmitted: number;
    total_packets_transmitted: number;
    errors_on_received: number;
    total_errors_on_received: number;
    errors_on_transmitted: number;
    total_errors_on_transmitted: number;
    mac_address: number[];
    mac_address_str: string;
}>;
export type Network = z.infer<typeof Network>;
export declare const Component: z.ZodObject<{
    temperature: z.ZodNumber;
    max: z.ZodNumber;
    critical: z.ZodNullable<z.ZodNumber>;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    temperature: number;
    max: number;
    critical: number | null;
    label: string;
}, {
    temperature: number;
    max: number;
    critical: number | null;
    label: string;
}>;
export type Component = z.infer<typeof Component>;
export declare const Process: z.ZodObject<{
    name: z.ZodString;
    cmd: z.ZodArray<z.ZodString, "many">;
    exe: z.ZodNullable<z.ZodString>;
    pid: z.ZodNumber;
    environ: z.ZodArray<z.ZodString, "many">;
    cwd: z.ZodNullable<z.ZodString>;
    root: z.ZodNullable<z.ZodString>;
    memory: z.ZodNumber;
    virtual_memory: z.ZodNumber;
    parent: z.ZodNullable<z.ZodNumber>;
    status: z.ZodUnion<[z.ZodLiteral<"Idle">, z.ZodLiteral<"Run">, z.ZodLiteral<"Sleep">, z.ZodLiteral<"Stop">, z.ZodLiteral<"Zombie">, z.ZodLiteral<"Tracing">, z.ZodLiteral<"Dead">, z.ZodLiteral<"Wakekill">, z.ZodLiteral<"Waking">, z.ZodLiteral<"Parked">, z.ZodLiteral<"LockBlocked">, z.ZodLiteral<"UninterruptibleDiskSleep">, z.ZodObject<{
        Unknown: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        Unknown: number;
    }, {
        Unknown: number;
    }>]>;
    start_time: z.ZodNumber;
    run_time: z.ZodNumber;
    cpu_usage: z.ZodNumber;
    disk_usage: z.ZodObject<{
        total_written_bytes: z.ZodNumber;
        written_bytes: z.ZodNumber;
        total_read_bytes: z.ZodNumber;
        read_bytes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total_written_bytes: number;
        written_bytes: number;
        total_read_bytes: number;
        read_bytes: number;
    }, {
        total_written_bytes: number;
        written_bytes: number;
        total_read_bytes: number;
        read_bytes: number;
    }>;
    user_id: z.ZodNullable<z.ZodString>;
    effective_user_id: z.ZodNullable<z.ZodString>;
    group_id: z.ZodNullable<z.ZodString>;
    effective_group_id: z.ZodNullable<z.ZodString>;
    session_id: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    };
    name: string;
    cpu_usage: number;
    cmd: string[];
    exe: string | null;
    pid: number;
    environ: string[];
    cwd: string | null;
    root: string | null;
    memory: number;
    virtual_memory: number;
    parent: number | null;
    start_time: number;
    run_time: number;
    disk_usage: {
        total_written_bytes: number;
        written_bytes: number;
        total_read_bytes: number;
        read_bytes: number;
    };
    user_id: string | null;
    effective_user_id: string | null;
    group_id: string | null;
    effective_group_id: string | null;
    session_id: number | null;
}, {
    status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    };
    name: string;
    cpu_usage: number;
    cmd: string[];
    exe: string | null;
    pid: number;
    environ: string[];
    cwd: string | null;
    root: string | null;
    memory: number;
    virtual_memory: number;
    parent: number | null;
    start_time: number;
    run_time: number;
    disk_usage: {
        total_written_bytes: number;
        written_bytes: number;
        total_read_bytes: number;
        read_bytes: number;
    };
    user_id: string | null;
    effective_user_id: string | null;
    group_id: string | null;
    effective_group_id: string | null;
    session_id: number | null;
}>;
export type Process = z.infer<typeof Process>;
export declare const StaticInfo: z.ZodObject<{
    hostname: z.ZodNullable<z.ZodString>;
    kernel_version: z.ZodNullable<z.ZodString>;
    os_version: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string | null;
    hostname: string | null;
    kernel_version: string | null;
    os_version: string | null;
}, {
    name: string | null;
    hostname: string | null;
    kernel_version: string | null;
    os_version: string | null;
}>;
export type StaticInfo = z.infer<typeof StaticInfo>;
export declare const MemoryInfo: z.ZodObject<{
    total_memory: z.ZodNumber;
    used_memory: z.ZodNumber;
    total_swap: z.ZodNumber;
    used_swap: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    total_memory: number;
    used_memory: number;
    total_swap: number;
    used_swap: number;
}, {
    total_memory: number;
    used_memory: number;
    total_swap: number;
    used_swap: number;
}>;
export type MemoryInfo = z.infer<typeof MemoryInfo>;
export declare const CpuInfo: z.ZodObject<{
    cpus: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        frequency: z.ZodNumber;
        cpu_usage: z.ZodNumber;
        vendor_id: z.ZodString;
        brand: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }, {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }>, "many">;
    cpu_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    cpus: {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }[];
    cpu_count: number;
}, {
    cpus: {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }[];
    cpu_count: number;
}>;
export type CpuInfo = z.infer<typeof CpuInfo>;
export declare const AllSystemInfo: z.ZodObject<{
    hostname: z.ZodNullable<z.ZodString>;
    kernel_version: z.ZodNullable<z.ZodString>;
    os_version: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    total_memory: z.ZodNumber;
    used_memory: z.ZodNumber;
    total_swap: z.ZodNumber;
    used_swap: z.ZodNumber;
    cpus: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        frequency: z.ZodNumber;
        cpu_usage: z.ZodNumber;
        vendor_id: z.ZodString;
        brand: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }, {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }>, "many">;
    cpu_count: z.ZodNumber;
    disks: z.ZodArray<z.ZodObject<{
        kind: z.ZodUnion<[z.ZodLiteral<"HDD">, z.ZodLiteral<"SSD">, z.ZodObject<{
            Unknown: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            Unknown: number;
        }, {
            Unknown: number;
        }>]>;
        name: z.ZodString;
        file_system: z.ZodString;
        mount_point: z.ZodString;
        total_space: z.ZodNumber;
        available_space: z.ZodNumber;
        is_removable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        kind: "HDD" | "SSD" | {
            Unknown: number;
        };
        file_system: string;
        mount_point: string;
        total_space: number;
        available_space: number;
        is_removable: boolean;
    }, {
        name: string;
        kind: "HDD" | "SSD" | {
            Unknown: number;
        };
        file_system: string;
        mount_point: string;
        total_space: number;
        available_space: number;
        is_removable: boolean;
    }>, "many">;
    networks: z.ZodArray<z.ZodObject<{
        interface_name: z.ZodString;
        received: z.ZodNumber;
        total_received: z.ZodNumber;
        transmitted: z.ZodNumber;
        total_transmitted: z.ZodNumber;
        packets_received: z.ZodNumber;
        total_packets_received: z.ZodNumber;
        packets_transmitted: z.ZodNumber;
        total_packets_transmitted: z.ZodNumber;
        errors_on_received: z.ZodNumber;
        total_errors_on_received: z.ZodNumber;
        errors_on_transmitted: z.ZodNumber;
        total_errors_on_transmitted: z.ZodNumber;
        mac_address: z.ZodArray<z.ZodNumber, "many">;
        mac_address_str: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        received: number;
        interface_name: string;
        total_received: number;
        transmitted: number;
        total_transmitted: number;
        packets_received: number;
        total_packets_received: number;
        packets_transmitted: number;
        total_packets_transmitted: number;
        errors_on_received: number;
        total_errors_on_received: number;
        errors_on_transmitted: number;
        total_errors_on_transmitted: number;
        mac_address: number[];
        mac_address_str: string;
    }, {
        received: number;
        interface_name: string;
        total_received: number;
        transmitted: number;
        total_transmitted: number;
        packets_received: number;
        total_packets_received: number;
        packets_transmitted: number;
        total_packets_transmitted: number;
        errors_on_received: number;
        total_errors_on_received: number;
        errors_on_transmitted: number;
        total_errors_on_transmitted: number;
        mac_address: number[];
        mac_address_str: string;
    }>, "many">;
    components: z.ZodArray<z.ZodObject<{
        temperature: z.ZodNumber;
        max: z.ZodNumber;
        critical: z.ZodNullable<z.ZodNumber>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        temperature: number;
        max: number;
        critical: number | null;
        label: string;
    }, {
        temperature: number;
        max: number;
        critical: number | null;
        label: string;
    }>, "many">;
    processes: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        cmd: z.ZodArray<z.ZodString, "many">;
        exe: z.ZodNullable<z.ZodString>;
        pid: z.ZodNumber;
        environ: z.ZodArray<z.ZodString, "many">;
        cwd: z.ZodNullable<z.ZodString>;
        root: z.ZodNullable<z.ZodString>;
        memory: z.ZodNumber;
        virtual_memory: z.ZodNumber;
        parent: z.ZodNullable<z.ZodNumber>;
        status: z.ZodUnion<[z.ZodLiteral<"Idle">, z.ZodLiteral<"Run">, z.ZodLiteral<"Sleep">, z.ZodLiteral<"Stop">, z.ZodLiteral<"Zombie">, z.ZodLiteral<"Tracing">, z.ZodLiteral<"Dead">, z.ZodLiteral<"Wakekill">, z.ZodLiteral<"Waking">, z.ZodLiteral<"Parked">, z.ZodLiteral<"LockBlocked">, z.ZodLiteral<"UninterruptibleDiskSleep">, z.ZodObject<{
            Unknown: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            Unknown: number;
        }, {
            Unknown: number;
        }>]>;
        start_time: z.ZodNumber;
        run_time: z.ZodNumber;
        cpu_usage: z.ZodNumber;
        disk_usage: z.ZodObject<{
            total_written_bytes: z.ZodNumber;
            written_bytes: z.ZodNumber;
            total_read_bytes: z.ZodNumber;
            read_bytes: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        }, {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        }>;
        user_id: z.ZodNullable<z.ZodString>;
        effective_user_id: z.ZodNullable<z.ZodString>;
        group_id: z.ZodNullable<z.ZodString>;
        effective_group_id: z.ZodNullable<z.ZodString>;
        session_id: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        };
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string | null;
        pid: number;
        environ: string[];
        cwd: string | null;
        root: string | null;
        memory: number;
        virtual_memory: number;
        parent: number | null;
        start_time: number;
        run_time: number;
        disk_usage: {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        };
        user_id: string | null;
        effective_user_id: string | null;
        group_id: string | null;
        effective_group_id: string | null;
        session_id: number | null;
    }, {
        status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        };
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string | null;
        pid: number;
        environ: string[];
        cwd: string | null;
        root: string | null;
        memory: number;
        virtual_memory: number;
        parent: number | null;
        start_time: number;
        run_time: number;
        disk_usage: {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        };
        user_id: string | null;
        effective_user_id: string | null;
        group_id: string | null;
        effective_group_id: string | null;
        session_id: number | null;
    }>, "many">;
    batteries: z.ZodArray<z.ZodObject<{
        state_of_charge: z.ZodNumber;
        energy: z.ZodNumber;
        energy_full: z.ZodNumber;
        energy_full_design: z.ZodNumber;
        energy_rate: z.ZodNumber;
        voltage: z.ZodNumber;
        state_of_health: z.ZodNumber;
        state: z.ZodEnum<["Unknown", "Charging", "Discharging", "Empty", "Full"]>;
        technology: z.ZodEnum<["Unknown", "LithiumIon", "LeadAcid", "LithiumPolymer", "NickelMetalHydride", "NickelCadmium", "NickelZinc", "LithiumIronPhosphate", "RechargeableAlkalineManganese"]>;
        temperature_kelin: z.ZodNullable<z.ZodNumber>;
        temperature_celsius: z.ZodNullable<z.ZodNumber>;
        temperature_fahrenheit: z.ZodNullable<z.ZodNumber>;
        cycle_count: z.ZodNullable<z.ZodNumber>;
        vendor: z.ZodNullable<z.ZodString>;
        model: z.ZodNullable<z.ZodString>;
        serial_number: z.ZodNullable<z.ZodString>;
        time_to_full: z.ZodNullable<z.ZodNumber>;
        time_to_empty: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        state_of_charge: number;
        energy: number;
        energy_full: number;
        energy_full_design: number;
        energy_rate: number;
        voltage: number;
        state_of_health: number;
        state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
        technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
        temperature_kelin: number | null;
        temperature_celsius: number | null;
        temperature_fahrenheit: number | null;
        cycle_count: number | null;
        vendor: string | null;
        model: string | null;
        serial_number: string | null;
        time_to_full: number | null;
        time_to_empty: number | null;
    }, {
        state_of_charge: number;
        energy: number;
        energy_full: number;
        energy_full_design: number;
        energy_rate: number;
        voltage: number;
        state_of_health: number;
        state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
        technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
        temperature_kelin: number | null;
        temperature_celsius: number | null;
        temperature_fahrenheit: number | null;
        cycle_count: number | null;
        vendor: string | null;
        model: string | null;
        serial_number: string | null;
        time_to_full: number | null;
        time_to_empty: number | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string | null;
    hostname: string | null;
    kernel_version: string | null;
    os_version: string | null;
    total_memory: number;
    used_memory: number;
    total_swap: number;
    used_swap: number;
    cpus: {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }[];
    cpu_count: number;
    disks: {
        name: string;
        kind: "HDD" | "SSD" | {
            Unknown: number;
        };
        file_system: string;
        mount_point: string;
        total_space: number;
        available_space: number;
        is_removable: boolean;
    }[];
    networks: {
        received: number;
        interface_name: string;
        total_received: number;
        transmitted: number;
        total_transmitted: number;
        packets_received: number;
        total_packets_received: number;
        packets_transmitted: number;
        total_packets_transmitted: number;
        errors_on_received: number;
        total_errors_on_received: number;
        errors_on_transmitted: number;
        total_errors_on_transmitted: number;
        mac_address: number[];
        mac_address_str: string;
    }[];
    components: {
        temperature: number;
        max: number;
        critical: number | null;
        label: string;
    }[];
    processes: {
        status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        };
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string | null;
        pid: number;
        environ: string[];
        cwd: string | null;
        root: string | null;
        memory: number;
        virtual_memory: number;
        parent: number | null;
        start_time: number;
        run_time: number;
        disk_usage: {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        };
        user_id: string | null;
        effective_user_id: string | null;
        group_id: string | null;
        effective_group_id: string | null;
        session_id: number | null;
    }[];
    batteries: {
        state_of_charge: number;
        energy: number;
        energy_full: number;
        energy_full_design: number;
        energy_rate: number;
        voltage: number;
        state_of_health: number;
        state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
        technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
        temperature_kelin: number | null;
        temperature_celsius: number | null;
        temperature_fahrenheit: number | null;
        cycle_count: number | null;
        vendor: string | null;
        model: string | null;
        serial_number: string | null;
        time_to_full: number | null;
        time_to_empty: number | null;
    }[];
}, {
    name: string | null;
    hostname: string | null;
    kernel_version: string | null;
    os_version: string | null;
    total_memory: number;
    used_memory: number;
    total_swap: number;
    used_swap: number;
    cpus: {
        name: string;
        frequency: number;
        cpu_usage: number;
        vendor_id: string;
        brand: string;
    }[];
    cpu_count: number;
    disks: {
        name: string;
        kind: "HDD" | "SSD" | {
            Unknown: number;
        };
        file_system: string;
        mount_point: string;
        total_space: number;
        available_space: number;
        is_removable: boolean;
    }[];
    networks: {
        received: number;
        interface_name: string;
        total_received: number;
        transmitted: number;
        total_transmitted: number;
        packets_received: number;
        total_packets_received: number;
        packets_transmitted: number;
        total_packets_transmitted: number;
        errors_on_received: number;
        total_errors_on_received: number;
        errors_on_transmitted: number;
        total_errors_on_transmitted: number;
        mac_address: number[];
        mac_address_str: string;
    }[];
    components: {
        temperature: number;
        max: number;
        critical: number | null;
        label: string;
    }[];
    processes: {
        status: "Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        };
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string | null;
        pid: number;
        environ: string[];
        cwd: string | null;
        root: string | null;
        memory: number;
        virtual_memory: number;
        parent: number | null;
        start_time: number;
        run_time: number;
        disk_usage: {
            total_written_bytes: number;
            written_bytes: number;
            total_read_bytes: number;
            read_bytes: number;
        };
        user_id: string | null;
        effective_user_id: string | null;
        group_id: string | null;
        effective_group_id: string | null;
        session_id: number | null;
    }[];
    batteries: {
        state_of_charge: number;
        energy: number;
        energy_full: number;
        energy_full_design: number;
        energy_rate: number;
        voltage: number;
        state_of_health: number;
        state: "Unknown" | "Charging" | "Discharging" | "Empty" | "Full";
        technology: "Unknown" | "LithiumIon" | "LeadAcid" | "LithiumPolymer" | "NickelMetalHydride" | "NickelCadmium" | "NickelZinc" | "LithiumIronPhosphate" | "RechargeableAlkalineManganese";
        temperature_kelin: number | null;
        temperature_celsius: number | null;
        temperature_fahrenheit: number | null;
        cycle_count: number | null;
        vendor: string | null;
        model: string | null;
        serial_number: string | null;
        time_to_full: number | null;
        time_to_empty: number | null;
    }[];
}>;
export type AllSystemInfo = z.infer<typeof AllSystemInfo>;
//# sourceMappingURL=type.d.ts.map