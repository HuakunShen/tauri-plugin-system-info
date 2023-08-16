pub mod network;
pub mod memory;
pub mod static_info;

#[tauri::command]
pub async fn all_sys_info() -> Result<(), String> {
    Ok(())
}
