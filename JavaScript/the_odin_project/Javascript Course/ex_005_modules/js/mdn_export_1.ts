// Exporting declarations
export let name1, name2;

export const name3 = 1, name4 = 1;

export function function_name() {};

export class ClassName {};

export function* generator_function_name() {};

// export const {name5, name6: bar} = o;

// export const [name7, name8] = array;


// Export list
let name9, name10;
export {name9, name10};

let name11, name12;
export {name11 as variable1, name12 as variable2};

let name13
export {name13 as "string name"};

let name14;
// export {name14 as default};



// Default exports (needs to be commented to avoid errors when opening the page)
// let expression = 7;
// export default expression;

// export default function function_name2() {};

// export default class ClassName {};

// export default function* generator_function_name2() {};

// export default function() {};

// export default class {};

// export default function* () {};



// Aggregating modules

// export * from "./one.js";
// export * as m_name1 from "./two.js";
export {farewell} from "./one.js";
export {farewell as new_farewell, greeting as new_greeting} from "./one.js";
// export {default} from "./one.js";
export {default as new_default} from "./one.js"


// export features declared elsewhere
function my_function_2() {};
let my_variable_2 = 3;
export {my_function_2, my_variable_2};

export let my_variable = Math.sqrt(4);
export function my_function() {
    console.log("this function");
}

// no error with export before creating and setting x
export {x};
const x = 1;



// export {my_function_3 as default}; // same as export default my_function_3

function my_function_3() {};

// export individual features as default
// export default function () { /* … */ }
// export default class { /* … */ }

// export default 1 + 2;



// foo();

// export default function foo() {
//     console.log("Hi");
// }

// export default function () {
//     console.log("Hi");
// }


const k = 12;
export default k;
