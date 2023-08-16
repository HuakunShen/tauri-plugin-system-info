import { invoke } from "@tauri-apps/api/tauri";
import {
  DiskKind,
  MacAddress,
  ProcessStatus,
  DiskUsage,
  Cpu,
  Disk,
  Network,
  Component,
  Process,
  StaticInfo,
  MemoryInfo,
  CpuInfo,
  AllSystemInfo,
} from "./type";
import { number } from "zod";

export function allSysInfo(): Promise<AllSystemInfo> {
  return invoke("plugin:system-info|all_sys_info");
}
// Memory
export function totalMemory(): Promise<number> {
  return invoke("plugin:system-info|total_memory");
}
export function usedMemory(): Promise<number> {
  return invoke("plugin:system-info|used_memory");
}
export function totalSwap(): Promise<number> {
  return invoke("plugin:system-info|total_swap");
}
export function usedSwap(): Promise<number> {
  return invoke("plugin:system-info|used_swap");
}
export function memoryInfo(): Promise<MemoryInfo> {
  return invoke("plugin:system-info|memory_info");
}
// Static Info
export function hostname(): Promise<String> {
  return invoke("plugin:system-info|hostname");
}
export function name(): Promise<String> {
  return invoke("plugin:system-info|name");
}
export function kernelVersion(): Promise<String> {
  return invoke("plugin:system-info|kernel_version");
}
export function osVersion(): Promise<String> {
  return invoke("plugin:system-info|os_version");
}
export function staticInfo(): Promise<StaticInfo> {
  return invoke("plugin:system-info|static_info");
}
// Components
export function components(): Promise<Component> {
  return invoke("plugin:system-info|components");
}
// Cpu
export function cpus(): Promise<Cpu> {
  return invoke("plugin:system-info|cpus");
}
export function cpuCount(): Promise<number> {
  return invoke("plugin:system-info|cpu_count");
}
export function cpuInfo(): Promise<CpuInfo> {
  return invoke("plugin:system-info|cpu_info");
}
// Disk
export function disks(): Promise<Disk[]> {
  return invoke("plugin:system-info|disks");
}
// Network
export function networks(): Promise<Network[]> {
  return invoke("plugin:system-info|networks");
}
// Process
export function processes(): Promise<Process[]> {
  return invoke("plugin:system-info|processes");
}
// Refresh
export function refreshAll(): Promise<void> {
  return invoke("plugin:system-info|refresh_all");
}
export function refreshMemory(): Promise<void> {
  return invoke("plugin:system-info|refresh_memory");
}
export function refreshCpu(): Promise<void> {
  return invoke("plugin:system-info|refresh_cpu");
}
export function refreshSystem(): Promise<void> {
  return invoke("plugin:system-info|refresh_system");
}
export function refreshComponents(): Promise<void> {
  return invoke("plugin:system-info|refresh_components");
}
export function refreshComponentsList(): Promise<void> {
  return invoke("plugin:system-info|refresh_components_list");
}
export function refreshDisks(): Promise<void> {
  return invoke("plugin:system-info|refresh_disks");
}
export function refreshDisksList(): Promise<void> {
  return invoke("plugin:system-info|refresh_disks_list");
}
export function refreshUsersList(): Promise<void> {
  return invoke("plugin:system-info|refresh_users_list");
}
export function refreshNetworks(): Promise<void> {
  return invoke("plugin:system-info|refresh_networks");
}
export function refreshNetworksList(): Promise<void> {
  return invoke("plugin:system-info|refresh_networks_list");
}
export function refreshProcesses(): Promise<void> {
  return invoke("plugin:system-info|refresh_processes");
}

export function debugCommand() {
  return invoke("plugin:system-info|debug");
}

export function batteries() {
  return invoke("plugin:system-info|batteries");
}