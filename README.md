# Tauri Plugin system-info

> This is a Tauri plugin for reading system information.

- Rust Crate: https://crates.io/crates/tauri-plugin-system-info
- TypeScript API: https://www.npmjs.com/package/tauri-plugin-system-info-api

## Installation

> If you are installing from npm and crates.io package registry, make sure the versions for both packages are the same, otherwise, the API may not match.

### Rust Install

`cargo add tauri-plugin-system-info` within `src-tauri` to add the package.

Or add the following to your `Cargo.toml` for the latest unpublished version (not recommanded).

```toml
tauri-plugin-system-info = { git = "https://github.com/HuakunShen/tauri-plugin-system-info", branch = "v1" } # use v2 branch for Tauri v2 plugin
```

### NPM Install

Run the following to install JavaScript/TypeScript API package.

```bash
npm i tauri-plugin-system-info-api
# npm add https://github.com/HuakunShen/tauri-plugin-system-info # or this for latest unpublished version (not recommended)
```

In `main.rs`, add the following to your `tauri::Builder`:

```rust
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_system_info::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Info Supported

- [x] CPU
- [x] Network
- [x] Process
- [x] Memory
- [x] Hostname
- [x] Kernel Version
- [x] OS Version
- [x] Battery

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
  allSysInfo,
  memoryInfo,
  staticInfo,
  cpuInfo,
  AllSystemInfo,
  StaticInfo,
  MemoryInfo,
  CpuInfo,
  batteries,
  Batteries,
} from "tauri-plugin-system-info-api";

console.log(AllSystemInfo.parse(await allSysInfo()));
console.log(MemoryInfo.parse(await memoryInfo()));
console.log(StaticInfo.parse(await staticInfo()));
console.log(CpuInfo.parse(await cpuInfo()));
console.log(Batteries.parse(await batteries()));
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
