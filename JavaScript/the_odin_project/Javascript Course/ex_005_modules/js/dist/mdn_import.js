// import default_export from "./mdn_imports_source.js";
// console.log(default_export);
import * as name from "./mdn_imports_source.js";
console.log(name.default);
import { export_1 } from "./mdn_imports_source.js";
console.log(export_1);
import { export_1 as alias_1 } from "./mdn_imports_source.js";
console.log(alias_1);
import { default as alias_2 } from "./mdn_imports_source.js";
console.log(alias_2);
console.log(export_1);
import { export_2 as alias_3 } from "./mdn_imports_source.js";
console.log(alias_3);
import { "string name" as alias_4 } from "./mdn_imports_source.js";
console.log(alias_4);
import "./mdn_imports_source.js";
import { my_export } from "./mdn_imports_source.js";
console.log(my_export);
import { foo, bar } from "./mdn_imports_source.js";
console.log(foo, bar);
import { really_long_module_export_name as short_name } from "./mdn_imports_source.js";
console.log(short_name);
import { "a-name" as alias } from "./mdn_imports_source.js";
console.log(alias);
import * as source_module from "./mdn_imports_source.js";
console.log(source_module.bar);
console.log(source_module["a-name"]);
// this serves as a way to run the code in the module without necessarily using any of it's objects
// or functions
import "./mdn_imports_source.js";
import { my_value } from "./mdn_imports_source.js";
import * as my_module from "./mdn_imports_source.js";
console.log(my_value); // 1
console.log(my_module.my_value); // 1
setTimeout(() => {
    console.log(my_value); // 2
    console.log(my_module.my_value); // 2
    // my_value = 3; // Uncaught TypeError: Assignment to constant variable.
}, 1000);
