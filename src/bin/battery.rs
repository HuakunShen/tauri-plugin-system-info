use uom::si::time::second;
use uom::si::thermodynamic_temperature::*;

fn main() -> Result<(), starship_battery::Error> {
    let manager = starship_battery::Manager::new()?;

    for (idx, maybe_battery) in manager.batteries()?.enumerate() {
        let battery = maybe_battery?;
        let state_of_charge: f32 = battery.state_of_charge().into();
        println!("Battery #{}:", idx);
        println!("State of Charge: {:?}", state_of_charge);
        println!("energy: {:?}", battery.energy());
        println!("energy_full: {:?}", battery.energy_full());
        println!("energy_full_design: {:?}", battery.energy_full_design());
        println!("energy_rate: {:?}", battery.energy_rate());
        println!("voltage: {:?}", battery.voltage());
        let state_of_health: f32 = battery.state_of_health().into();
        println!("state_of_health: {:?}", state_of_health);
        println!("state: {:?}", battery.state());
        println!("technology: {:?}", battery.technology());
        println!("temperature: {:?}", battery.temperature().unwrap().get::<degree_celsius>());
        let cycle_count = battery.cycle_count();
        println!("cycle_count: {:?}", cycle_count);
        println!("vendor: {:?}", battery.vendor());
        println!("model: {:?}", battery.model());
        println!("serial_number: {:?}", battery.serial_number());
        // println!(
        //     "time_to_full: {:?}",
        //     battery.time_to_full().unwrap().get::<second>()
        // );
        println!("time_to_empty: {:?}", battery.time_to_empty().unwrap().get::<second>());
    }

    Ok(())
}
