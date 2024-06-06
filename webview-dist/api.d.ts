import { Cpu, Disk, Network, Component, Process, StaticInfo, MemoryInfo, CpuInfo, AllSystemInfo, Battery } from "./type";
export declare function allSysInfo(): Promise<AllSystemInfo>;
export declare function totalMemory(): Promise<number>;
export declare function usedMemory(): Promise<number>;
export declare function totalSwap(): Promise<number>;
export declare function usedSwap(): Promise<number>;
export declare function memoryInfo(): Promise<MemoryInfo>;
export declare function hostname(): Promise<String>;
export declare function name(): Promise<String>;
export declare function kernelVersion(): Promise<String>;
export declare function osVersion(): Promise<String>;
export declare function staticInfo(): Promise<StaticInfo>;
export declare function components(): Promise<Component>;
export declare function cpus(): Promise<Cpu>;
export declare function cpuCount(): Promise<number>;
export declare function cpuInfo(): Promise<CpuInfo>;
export declare function disks(): Promise<Disk[]>;
export declare function networks(): Promise<Network[]>;
export declare function processes(): Promise<Process[]>;
export declare function refreshAll(): Promise<void>;
export declare function refreshMemory(): Promise<void>;
export declare function refreshCpu(): Promise<void>;
export declare function refreshProcesses(): Promise<void>;
export declare function debugCommand(): Promise<unknown>;
export declare function batteries(): Promise<Battery>;
