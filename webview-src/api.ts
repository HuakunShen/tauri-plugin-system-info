import { invoke } from "@tauri-apps/api/tauri";

export function allSysInfo() {
  return invoke("plugin:system-info|all_sys_info");
}
// Memory
export function totalMemory() {
  return invoke("plugin:system-info|total_memory");
}
export function usedMemory() {
  return invoke("plugin:system-info|used_memory");
}
export function totalSwap() {
  return invoke("plugin:system-info|total_swap");
}
export function usedSwap() {
  return invoke("plugin:system-info|used_swap");
}
export function memoryInfo() {
  return invoke("plugin:system-info|memory_info");
}
// Static Info
export function hostname() {
  return invoke("plugin:system-info|hostname");
}
export function name() {
  return invoke("plugin:system-info|name");
}
export function kernelVersion() {
  return invoke("plugin:system-info|kernel_version");
}
export function osVersion() {
  return invoke("plugin:system-info|os_version");
}
export function staticInfo() {
  return invoke("plugin:system-info|static_info");
}
// Components
export function components() {
  return invoke("plugin:system-info|components");
}
// Cpu
export function cpus() {
  return invoke("plugin:system-info|cpus");
}
export function cpuCount() {
  return invoke("plugin:system-info|cpu_count");
}
export function cpuInfo() {
  return invoke("plugin:system-info|cpu_info");
}
// Disk
export function disks() {
  return invoke("plugin:system-info|disks");
}
// Network
export function networks() {
  return invoke("plugin:system-info|networks");
}
// Process
export function processes() {
  return invoke("plugin:system-info|processes");
}
// Refresh
export function refreshAll() {
  return invoke("plugin:system-info|refresh_all");
}
export function refreshMemory() {
  return invoke("plugin:system-info|refresh_memory");
}
export function refreshCpu() {
  return invoke("plugin:system-info|refresh_cpu");
}
export function refreshSystem() {
  return invoke("plugin:system-info|refresh_system");
}
export function refreshComponents() {
  return invoke("plugin:system-info|refresh_components");
}
export function refreshComponentsList() {
  return invoke("plugin:system-info|refresh_components_list");
}
export function refreshDisks() {
  return invoke("plugin:system-info|refresh_disks");
}
export function refreshDisksList() {
  return invoke("plugin:system-info|refresh_disks_list");
}
export function refreshUsersList() {
  return invoke("plugin:system-info|refresh_users_list");
}
export function refreshNetworks() {
  return invoke("plugin:system-info|refresh_networks");
}
export function refreshNetworksList() {
  return invoke("plugin:system-info|refresh_networks_list");
}
export function refreshProcesses() {
  return invoke("plugin:system-info|refresh_processes");
}

export function debugCommand() {
  return invoke("plugin:system-info|debug");
}
