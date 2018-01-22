namespace TypeInference {

  let x = 3
  let y = ['0', 1, null, undefined];

  class Animal { private y: number }
  class Snake extends Animal { private x: number }
  class Monkey extends Animal { private x: number }

  // let a:Snake = new Snake()

  // let b:Snake[] = [new Snake()]

  // let c:Animal[] = [new Snake(), new Monkey()]

}