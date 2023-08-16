use sysinfo::{NetworkExt, NetworksExt, ProcessExt, System, SystemExt};

fn main() {
    let mut sys = System::new_all();

    // First we update all information of our `System` struct.
    sys.refresh_all();

    // We display all disks' information:
    // println!("=> disks:");
    // for disk in sys.disks() {
    //     println!("{:?}", disk);
    // }
    // Network interfaces name, data received and data transmitted:
    // println!("=> networks:");
    // sys.refresh_networks();
    // for i in 1..10 {
    //     std::thread::sleep(std::time::Duration::from_secs(2));
    //     sys.refresh_networks();
    //     for (interface_name, data) in sys.networks() {
    //         println!(
    //             "{}: {}/{} B",
    //             interface_name,
    //             data.received(),
    //             data.transmitted()
    //         );
    //     }
    // }

    // Components temperature:
    // println!("=> components:");
    // for component in sys.components() {
    //     println!("{:?}", component);
    // }

    // println!("=> system:");
    // // RAM and swap information:
    // println!("total memory: {} bytes", sys.total_memory());
    // println!("used memory : {} bytes", sys.used_memory());
    // println!("total swap  : {} bytes", sys.total_swap());
    // println!("used swap   : {} bytes", sys.used_swap());

    // // Display system information:
    // println!("System name:             {:?}", sys.name());
    // println!("System kernel version:   {:?}", sys.kernel_version());
    // println!("System OS version:       {:?}", sys.os_version());
    // println!("System host name:        {:?}", sys.host_name());

    // Number of CPUs:
    // println!("NB CPUs: {}", sys.cpus().len());

    // Display processes ID, name na disk usage:
    for (pid, process) in sys.processes() {
        println!("[{}] {} {:?}", pid, process.name(), process.disk_usage());
    }
}
