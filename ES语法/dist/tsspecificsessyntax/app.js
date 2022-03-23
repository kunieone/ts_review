"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Cat, Dog } from "./animal"
// type Animals = Cat | Dog
const animal_1 = require("./animal");
/* console.log(func) 这样不可以了，因为是type入 */
console.log((0, animal_1.func)());
