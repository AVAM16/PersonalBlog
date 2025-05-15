let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
 * @param {number} birth_year
 * @param {number} birth_month
 * @param {number} birth_day
 * @param {number} current_year
 * @param {number} current_month
 * @param {number} current_day
 * @returns {number}
 */
export function calculate_age_rust(birth_year, birth_month, birth_day, current_year, current_month, current_day) {
    const ret = wasm.calculate_age_rust(birth_year, birth_month, birth_day, current_year, current_month, current_day);
    return ret;
}

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

