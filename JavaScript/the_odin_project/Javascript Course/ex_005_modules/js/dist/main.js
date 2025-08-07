// import * as ns from "./barrel.js";
// console.log(ns.a); // prints "undefined" since both module_1 and module_2 export a variable named 'a';
// import a from "./barrel.js";
import { cube, foo, graph } from "./my_module.js";
graph.options = {
    color: "blue",
    thickness: "3px"
};
graph.draw(); // From graph draw function
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
import cube2 from "./cube.js";
console.log(cube2(5)); // 125
