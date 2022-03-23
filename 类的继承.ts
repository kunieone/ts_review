interface Pingable {
  //   ping(): void === ping: () => void
  ping: () => string
}
interface Pongable {
  pong: () => string
}
class Sonar implements Pingable {
  public ping = () => "ping!"
}
class Ball implements Pingable, Pongable {
  public ping = () => "ping!"
  public pong = () => "pong"
}
console.log(new Sonar().ping())
interface CheckBox {
  check(name: string): boolean
}
class NameChecker implements CheckBox {
  /* 这里借口并不能左右实现的方法的参数类型！！ */
  check = (s: boolean | string): boolean => "OK".toLowerCase() === "ok"
}

interface A {
  x: number
  y?: number
}
class C implements A {
  x = 1
  y = 1 - parseFloat("2")
  /* 这里y是可选的，可以不实现 */
}
console.log(new C().y)

/*  */
