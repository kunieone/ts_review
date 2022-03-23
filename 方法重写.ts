class Base {
  /* 基类 */
  greet() {
    console.log("hello I'm Base class")
  }
}
class Derived extends Base {
  /* 派生类  */
  greet(name?: string): void {
    /* 这里需要判断条件. */
    if (name === undefined) {
      super.greet()
    } else {
      console.log("hello" + name)
    }
  }
}
