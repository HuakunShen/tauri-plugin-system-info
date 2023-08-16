import { invoke } from "@tauri-apps/api/tauri";

// static info
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

// CPU

// Network

// Disk

