class Foo {
  static #count = 0
  get count() {
    return Foo.#count
  }

  static {
    try {
      const lastInstance = { length: 100 }
      console.log(Foo.length)
    } catch (e) {}
  }
}

