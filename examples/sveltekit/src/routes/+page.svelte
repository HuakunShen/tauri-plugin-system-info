<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { onMount } from "svelte";
  import {
    allSysInfo,
    AllSystemInfo,
    batteries,
    Batteries,
    components,
    cpuCount,
    cpuInfo,
    CpuInfo,
    cpus,
    debugCommand,
    disks,
    hostname,
    kernelVersion,
    memoryInfo,
    MemoryInfo,
    name,
    networks,
    osVersion,
    processes,
    Process,
    refreshAll,
    refreshCpu,
    refreshMemory,
    refreshProcesses,
    staticInfo,
    StaticInfo,
    uptime,
    loadAverage,
    totalMemory,
    totalSwap,
    usedMemory,
    usedSwap,
    LoadAverage,
  } from "tauri-plugin-system-info-api";
  import * as v from "valibot";
  import { Inspect } from "svelte-inspect-value";

  let memoryInfoData: MemoryInfo | undefined;
  let staticInfoData: StaticInfo | undefined;
  let cpuInfoData: CpuInfo | undefined;
  let batteriesData: Batteries | undefined;
  let processesData: Process[] | undefined;
  let loadAverageData: LoadAverage | undefined;
  let uptimeData: number | undefined;
  let allSysInfoData: AllSystemInfo | undefined;
  onMount(async () => {
    reload();
    invoke("cpu_count").then((res) => {
      console.log(res);
    });
  });

  async function reload() {
    refreshAll();
    allSysInfoData = v.parse(AllSystemInfo, await allSysInfo());
    memoryInfoData = v.parse(MemoryInfo, await memoryInfo());
    staticInfoData = v.parse(StaticInfo, await staticInfo());
    cpuInfoData = v.parse(CpuInfo, await cpuInfo());
    batteriesData = v.parse(Batteries, await batteries());
    loadAverageData = v.parse(LoadAverage, await loadAverage());
    uptimeData = await uptime();
    console.log("All System Info", allSysInfoData);
    console.log("memoryInfoData", memoryInfoData);
    console.log("staticInfoData", staticInfoData);
    console.log("cpuInfoData", cpuInfoData);
    console.log("batteriesData", batteriesData);
    console.log("loadAverageData", loadAverageData);
    console.log("uptimeData", uptimeData);
  }

  async function loadProcesses() {
    processesData = v.parse(v.array(Process), await processes());
    console.log("processesData", processesData);
    const processesInfo = await processes();

    const allPs = v.parse(
      v.array(Process),
      processesInfo.sort((a, b) => b.memory - a.memory)
    );
    console.log(allPs.filter((ps) => ps.name.toLowerCase().includes("rust")));
  }
  let data: string = "";
  let error: string = "";
</script>

<div class="space-y-2 py-2">
  <h1 class="text-4xl font-bold">System Info</h1>
  <button class="btn" on:click={reload}>Reload</button>

  <h2 class="text-2xl font-bold">Load Average</h2>
  <Inspect name="loadAverageData" value={loadAverageData} />

  <h2 class="text-2xl font-bold">Uptime</h2>
  <Inspect name="uptimeData" value={uptimeData} />

  <h2 class="text-2xl font-bold">Memory Info</h2>
  <Inspect name="memoryInfoData" value={memoryInfoData} />

  <h2 class="text-2xl font-bold">CPU Info</h2>
  <Inspect name="cpuInfoData" value={cpuInfoData} />

  <h2 class="text-2xl font-bold">Static Info</h2>
  <Inspect name="staticInfoData" value={staticInfoData} />

  <h2 class="text-2xl font-bold">Batteries</h2>
  <Inspect name="batteriesData" value={batteriesData} />

  <h2 class="text-2xl font-bold">Processes</h2>
  <button class="btn" on:click={loadProcesses}>Load Processes</button>
  <Inspect name="processesData" value={processesData} />

  <h2 class="text-2xl font-bold">All System Info</h2>
  <Inspect name="allSysInfoData" value={allSysInfoData} />
</div>
