import { z } from "zod";
export declare const DiskKind: z.ZodUnion<[z.ZodLiteral<"HDD">, z.ZodLiteral<"SSD">, z.ZodObject<{
    Unknown: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Unknown: number;
}, {
    Unknown: number;
}>]>;
export declare type DiskKind = z.infer<typeof DiskKind>;
export declare const MacAddress: z.ZodArray<z.ZodNumber, "many">;
export declare type MacAddress = z.infer<typeof MacAddress>;
export declare const ProcessStatus: z.ZodUnion<[z.ZodLiteral<"Idle">, z.ZodLiteral<"Run">, z.ZodLiteral<"Sleep">, z.ZodLiteral<"Stop">, z.ZodLiteral<"Zombie">, z.ZodLiteral<"Tracing">, z.ZodLiteral<"Dead">, z.ZodLiteral<"Wakekill">, z.ZodLiteral<"Waking">, z.ZodLiteral<"Parked">, z.ZodLiteral<"LockBlocked">, z.ZodLiteral<"UninterruptibleDiskSleep">, z.ZodObject<{
    Unknown: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Unknown: number;
}, {
    Unknown: number;
}>]>;
export declare type ProcessStatus = z.infer<typeof ProcessStatus>;
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
export declare type DiskUsage = z.infer<typeof DiskUsage>;
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
export declare type Cpu = z.infer<typeof Cpu>;
export declare const Disk: z.ZodObject<{
    kind: z.ZodUnion<[z.ZodLiteral<"HDD">, z.ZodLiteral<"SSD">, z.ZodObject<{
        Unknown: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        Unknown: number;
    }, {
        Unknown: number;
    }>]>;
    name: z.ZodString;
    file_system: z.ZodArray<z.ZodNumber, "many">;
    mount_point: z.ZodString;
    total_space: z.ZodNumber;
    available_space: z.ZodNumber;
    is_removable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    kind: ("HDD" | "SSD" | {
        Unknown: number;
    }) & ("HDD" | "SSD" | {
        Unknown: number;
    } | undefined);
    file_system: number[];
    mount_point: string;
    total_space: number;
    available_space: number;
    is_removable: boolean;
}, {
    name: string;
    kind: ("HDD" | "SSD" | {
        Unknown: number;
    }) & ("HDD" | "SSD" | {
        Unknown: number;
    } | undefined);
    file_system: number[];
    mount_point: string;
    total_space: number;
    available_space: number;
    is_removable: boolean;
}>;
export declare type Disk = z.infer<typeof Disk>;
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
export declare type Network = z.infer<typeof Network>;
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
export declare type Component = z.infer<typeof Component>;
export declare const Process: z.ZodObject<{
    name: z.ZodString;
    cmd: z.ZodArray<z.ZodString, "many">;
    exe: z.ZodString;
    pid: z.ZodNumber;
    environ: z.ZodArray<z.ZodString, "many">;
    cwd: z.ZodString;
    root: z.ZodString;
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
    status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    } | undefined);
    name: string;
    cpu_usage: number;
    cmd: string[];
    exe: string;
    pid: number;
    environ: string[];
    cwd: string;
    root: string;
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
    status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
        Unknown: number;
    } | undefined);
    name: string;
    cpu_usage: number;
    cmd: string[];
    exe: string;
    pid: number;
    environ: string[];
    cwd: string;
    root: string;
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
export declare type Process = z.infer<typeof Process>;
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
export declare type StaticInfo = z.infer<typeof StaticInfo>;
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
export declare type MemoryInfo = z.infer<typeof MemoryInfo>;
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
export declare type CpuInfo = z.infer<typeof CpuInfo>;
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
        file_system: z.ZodArray<z.ZodNumber, "many">;
        mount_point: z.ZodString;
        total_space: z.ZodNumber;
        available_space: z.ZodNumber;
        is_removable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        kind: ("HDD" | "SSD" | {
            Unknown: number;
        }) & ("HDD" | "SSD" | {
            Unknown: number;
        } | undefined);
        file_system: number[];
        mount_point: string;
        total_space: number;
        available_space: number;
        is_removable: boolean;
    }, {
        name: string;
        kind: ("HDD" | "SSD" | {
            Unknown: number;
        }) & ("HDD" | "SSD" | {
            Unknown: number;
        } | undefined);
        file_system: number[];
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
        exe: z.ZodString;
        pid: z.ZodNumber;
        environ: z.ZodArray<z.ZodString, "many">;
        cwd: z.ZodString;
        root: z.ZodString;
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
        status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        } | undefined);
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string;
        pid: number;
        environ: string[];
        cwd: string;
        root: string;
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
        status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        } | undefined);
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string;
        pid: number;
        environ: string[];
        cwd: string;
        root: string;
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
        kind: ("HDD" | "SSD" | {
            Unknown: number;
        }) & ("HDD" | "SSD" | {
            Unknown: number;
        } | undefined);
        file_system: number[];
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
        status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        } | undefined);
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string;
        pid: number;
        environ: string[];
        cwd: string;
        root: string;
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
        kind: ("HDD" | "SSD" | {
            Unknown: number;
        }) & ("HDD" | "SSD" | {
            Unknown: number;
        } | undefined);
        file_system: number[];
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
        status: ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        }) & ("Idle" | "Run" | "Sleep" | "Stop" | "Zombie" | "Tracing" | "Dead" | "Wakekill" | "Waking" | "Parked" | "LockBlocked" | "UninterruptibleDiskSleep" | {
            Unknown: number;
        } | undefined);
        name: string;
        cpu_usage: number;
        cmd: string[];
        exe: string;
        pid: number;
        environ: string[];
        cwd: string;
        root: string;
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
}>;
export declare type AllSystemInfo = z.infer<typeof AllSystemInfo>;
