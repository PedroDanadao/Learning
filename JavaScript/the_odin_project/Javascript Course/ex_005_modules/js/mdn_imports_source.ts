export default 2;

export const [export_1, export_2] = [3, 4];

const variable_1 = 7;
export {variable_1 as "string name"}

const my_export = 89;
export {my_export};

export const [foo, bar] = [6, 9];

export let really_long_module_export_name = 40;

const a = 21;
export {a as "a-name"};

console.log("import source");

export let my_value = 1;
setTimeout(() => {
    my_value = 2;

}, 500);
