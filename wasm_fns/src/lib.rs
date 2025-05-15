use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn calculate_age_rust(
    birth_year: i32,
    birth_month: i32,
    birth_day: i32,
    current_year: i32,
    current_month: i32,
    current_day: i32,
) -> i32 {
    let mut age: i32 = current_year - birth_year;

    if (current_month < birth_month) || (current_month == birth_month && current_day < birth_day) {
        age -= 1;
    }

    age
}
