<script lang="ts">
  import {
    allSysInfo,
    batteries,
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
    refreshProcesses,
    debugCommand,
    AllSystemInfo,
    StaticInfo,
    MemoryInfo,
    CpuInfo,
    Batteries,
  } from "tauri-plugin-system-info-api";
  import { onMount } from "svelte";

  onMount(async () => {
    // ! used to debug if there is any parse error. There shouldn't.
    // let ret = AllSystemInfo.safeParse(await allSysInfo());
    // if (!ret.success) {
    //   console.log(ret.error);
    // }
    console.log("All System Info", AllSystemInfo.parse(await allSysInfo()));
    console.log("Memory Info", MemoryInfo.parse(await memoryInfo()));
    console.log("Static Info", StaticInfo.parse(await staticInfo()));
    console.log("CPU Info", CpuInfo.parse(await cpuInfo()));
    console.log("Battery Info", Batteries.parse(await batteries()));
  });

  let data: string = "";
  let error: string = "";
</script>

<div class="alert alert-warning flex flex-col">
  <span
    >Make sure you are in Tauri desktop app with development mode. Right click and inspect elements, check console for system info logged. There is too much data to display on screen.</span
  >
  <span>If there is error in console, this library may not support your OS/computer, you can notify the author.</span>
</div>
