namespace Interfaces {

  // interface types

  interface A {
    num: number;
  }

  interface B {
    num: number;
    str: string;
  }

  function doLog(a:A) {
    console.log(a);
  }

  let a:A = { num:1 };
  let b:B = { num:2, str:'ketto' };

  // doLog(a);
  // doLog(b);





  // function types

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
      let result = src.search(sub);
      return result > -1;
  }
  //mySearch()



  

  // hybrid types

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;


}