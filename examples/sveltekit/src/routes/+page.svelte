<script lang="ts">
  import {
    all_sys_info,
    total_memory,
    used_memory,
    total_swap,
    used_swap,
    memory_info,
    hostname,
    name,
    kernel_version,
    os_version,
    static_info,
    components,
    cpus,
    cpu_count,
    cpu_info,
    disks,
    networks,
    processes,
    refresh_all,
    refresh_memory,
    refresh_cpu,
    refresh_system,
    refresh_components,
    refresh_components_list,
    refresh_disks,
    refresh_disks_list,
    refresh_users_list,
    refresh_networks,
    refresh_networks_list,
    refresh_processes,
  } from "tauri-plugin-system-info-api";
  import { invoke } from "@tauri-apps/api";
  import { z } from "zod";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log(await all_sys_info());
    console.log(await memory_info());
    console.log(await static_info());
    console.log(await cpu_info());
  });

  let data: string = "";
  let error: string = "";
</script>

<div class="alert alert-warning">
  <span
    >Check console for system info. There is too much data to display on screen.</span
  >
</div>
