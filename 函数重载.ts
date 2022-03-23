function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrtimestamp: number, d?: number, y?: number): Date {
  return d === undefined || y === undefined
    ? new Date(mOrtimestamp)
    : new Date(y, mOrtimestamp + 1, d)
}

console.log(makeDate(1 - 1, 2, 2021).toLocaleString())
console.log(/* makeDate(1, 2) */)
// **********************************
// 为什么/* makeDate(1, 2) *会报错？
// **********************************
// 如上一行就会报错，因为虽然在实现上这个入参是合法的，不过函数的实现只是为了贴合函数的两个重载，而不能根据这个实现里面的入参来选去条件。
// 比如输入符合1，2，行两个函数重载的参数格式。
// 这样也提高了函数声明其功能性的严谨程度，没说让传入2个参数，就不可以
