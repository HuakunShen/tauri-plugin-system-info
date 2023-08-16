# Tauri Plugin system-info

> This is a Tauri plugin for reading system information.

## Info Supported

- [x] CPU
- [x] Network
- [x] Process
- [x] Memory
- [x] Hostname
- [x] Kernel Version
- [x] OS Version
- [ ] Battery

## Third Party Libraries Used

- [`sysinfo`](https://crates.io/crates/sysinfo)

## API

### TypeScript

All TypeScript APIs can be found in [api.ts](./webview-src/api.ts).

Return type of each API is added. The object structures can be found in [type.ts](./webview-src/type.ts).

Zod was used to define type schema and infer TypeScript types. You can import the types exported from the npm package.

The exported zod schemas can be used to parse data and make sure the data returned from rust APIs match the desired structure defined in schema.

```typescript
import {
  AllSystemInfo,
  StaticInfo,
  MemoryInfo,
  CpuInfo,
} from "tauri-plugin-system-info-api";

console.log(AllSystemInfo.parse(await allSysInfo()));
console.log(MemoryInfo.parse(await memoryInfo()));
console.log(StaticInfo.parse(await staticInfo()));
console.log(CpuInfo.parse(await cpuInfo()));
```

### Rust

The API functions in Rust are all exported, so that you can also build your own commands.

```rust
use tauri_plugin_system_info::utils::{SysInfo, SysInfoState};
```

`SysInfo` is the API struct that can be used to access all information. It's like a wrapper for `sysinfo` APIs and other crates. The reason for doing this is, some structs in third party libraries cannot be cloned or serialized, and thus cannot be sent to the frontend.

I aggregate all the APIs, do structure conversion and serilization with custom code.

## Usage

See [SvelteKit Example](./examples/sveltekit/README.md) for an example written with SvelteKit.
