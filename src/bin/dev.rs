use sysinfo::{System, SystemExt};
use tauri_plugin_system_info::commands::static_info::{hostname, kernel_version, name, os_version};
use tauri_plugin_system_info::utils::SysInfo;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // let sysinfo = SysInfo::default();
    // let hname = sysinfo.hostname1()?;
    // println!("{}", sysinfo.hostname().unwrap());
    // let sys = System::default();
    // let sys = System::new_all();

    // println!("{}", sys.host_name().unwrap());
    // println!("{}", hostname().unwrap().unwrap());
    // println!("{}", name().unwrap().unwrap());
    // println!("{}", os_version().unwrap().unwrap());
    // println!("{}", kernel_version().unwrap().unwrap());
    Ok(())
}
