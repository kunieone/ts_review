// import { Cat, Dog } from "./animal"
// type Animals = Cat | Dog
import { func, type Cat, type Dog } from "./animal"
/* console.log(func) 这样不可以了，因为是type入 */
console.log(func())
