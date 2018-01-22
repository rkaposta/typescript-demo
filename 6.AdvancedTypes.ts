namespace AdvancedTypes {
  // intersection
  function extend<T, U>(first: T, second: U): T & U {
      let result = <T & U>{};
      for (let id in first) {
          (<any>result)[id] = (<any>first)[id];
      }
      for (let id in second) {
          if (!result.hasOwnProperty(id)) {
              (<any>result)[id] = (<any>second)[id];
          }
      }
      return result;
  }

  class Person {
      constructor(public name: string) { }
  }
  interface Logger {
      log()
  }
  class ConsoleLogger implements Logger {
    log() {}
  }
  var jim = extend(new Person("Jim"), new ConsoleLogger());
  jim.

  // union

  function doStuff(name: string, value: string | number) {
    // ...
  }
  doStuff('key', 5);


  // TYPE GUARDS

  function call(phoneNum: any) {
    if (typeof phoneNum === "number") {
      let number = phoneNum;
    }
    if (typeof phoneNum === "string") {
      let number = phoneNum;
    }
  }

  let logger:Logger;
  logger = new ConsoleLogger();
  if (logger instanceof ConsoleLogger) {
    let myLogger = logger;
  }


  // nullable types

  let a:string ='null';
  function log(b:string) {
    console.log(b);
  }
  log(a);
  a = null;


  // index types

  function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }

  interface PersonWithAge {
      name: string;
      age: number;
  }
  let person: PersonWithAge = {
      name: 'Jarid',
      age: 35
  };
  let strings: number[] = pluck(person, ['age', 'name']); // ok, string[]



  // alias
  
  type Name = string;
  function aaa(a:Name):Name {return '';}
  let f = aaa('asd');
}