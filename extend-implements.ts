/* implements继承一个借口 */
/* extends继承一个类 */
class Animal {
  private number: number = 0
  eat(): void
  eat() {
    console.log(`I'm eating!`)
  }
  count() {
    console.log(this.number++ + "!")
  }
  move() {
    console.log(`I'm moving!`)
  }
}

class Dog extends Animal {
  eat(): void
  eat(): void {
    console.log(`I'm eating!wangwang!`)
  }
}
let d = new Dog()
d.count()
d.count()
