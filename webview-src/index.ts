import { invoke } from "@tauri-apps/api/tauri";

export function all_sys_info() {
  return invoke("plugin:system-info|all_sys_info");
}
// Memory
export function total_memory() {
  return invoke("plugin:system-info|total_memory");
}
export function used_memory() {
  return invoke("plugin:system-info|used_memory");
}
export function total_swap() {
  return invoke("plugin:system-info|total_swap");
}
export function used_swap() {
  return invoke("plugin:system-info|used_swap");
}
export function memory_info() {
  return invoke("plugin:system-info|memory_info");
}
// Static Info
export function hostname() {
  return invoke("plugin:system-info|hostname");
}
export function name() {
  return invoke("plugin:system-info|name");
}
export function kernel_version() {
  return invoke("plugin:system-info|kernel_version");
}
export function os_version() {
  return invoke("plugin:system-info|os_version");
}
export function static_info() {
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
export function cpu_count() {
  return invoke("plugin:system-info|cpu_count");
}
export function cpu_info() {
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
export function refresh_all() {
  return invoke("plugin:system-info|refresh_all");
}
export function refresh_memory() {
  return invoke("plugin:system-info|refresh_memory");
}
export function refresh_cpu() {
  return invoke("plugin:system-info|refresh_cpu");
}
export function refresh_system() {
  return invoke("plugin:system-info|refresh_system");
}
export function refresh_components() {
  return invoke("plugin:system-info|refresh_components");
}
export function refresh_components_list() {
  return invoke("plugin:system-info|refresh_components_list");
}
export function refresh_disks() {
  return invoke("plugin:system-info|refresh_disks");
}
export function refresh_disks_list() {
  return invoke("plugin:system-info|refresh_disks_list");
}
export function refresh_users_list() {
  return invoke("plugin:system-info|refresh_users_list");
}
export function refresh_networks() {
  return invoke("plugin:system-info|refresh_networks");
}
export function refresh_networks_list() {
  return invoke("plugin:system-info|refresh_networks_list");
}
export function refresh_processes() {
  return invoke("plugin:system-info|refresh_processes");
}
