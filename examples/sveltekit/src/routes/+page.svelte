<script lang="ts">
  import {
    allSysInfo,
    totalMemory,
    usedMemory,
    totalSwap,
    usedSwap,
    memoryInfo,
    hostname,
    name,
    kernelVersion,
    osVersion,
    staticInfo,
    components,
    cpus,
    cpuCount,
    cpuInfo,
    disks,
    networks,
    processes,
    refreshAll,
    refreshMemory,
    refreshCpu,
    refreshSystem,
    refreshComponents,
    refreshComponentsList,
    refreshDisks,
    refreshDisksList,
    refreshUsersList,
    refreshNetworks,
    refreshNetworksList,
    refreshProcesses,
    debugCommand,
    AllSystemInfo,
    StaticInfo,
    MemoryInfo,
    CpuInfo,
  } from "tauri-plugin-system-info-api";
  import { invoke } from "@tauri-apps/api";
  import { z } from "zod";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log(AllSystemInfo.parse(await allSysInfo()));
    console.log(MemoryInfo.parse(await memoryInfo()));
    console.log(StaticInfo.parse(await staticInfo()));
    console.log(CpuInfo.parse(await cpuInfo()));
  });

  let data: string = "";
  let error: string = "";
</script>

<div class="alert alert-warning">
  <span
    >Check console for system info. There is too much data to display on screen.</span
  >
</div>
