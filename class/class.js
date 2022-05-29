"use strict";

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//for fun and profit
//all the time is great and committed

class MyClass {
  constructor(
    // when constructed with 1 or more arguments
    { a = "aaaaa", b = "bbbbb", c = "ccccc" } = {
      // when constructed with 0 arguments
      a: "Adefault",
      b: "Bdefault",
      c: "Cdefault",
    }
  ) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

MyClass.prototype.toString = function myClassToString() {
  let result = "";
  for (const [key, value] of Object.entries(this)) {
    result = result.concat(`${key}: ${value}\n`);
  }

  return result.trim();
};

var v = new MyClass({ a: "Albert", b: "Bob" });
console.log(v.toString(), "\n"); // a: Albert b: Bob c: cccc
var w = new MyClass();
console.log(w.toString(), "\n"); // a: Adefault b: bDefault c: cDefault

class SimplerClass {
  constructor(a = "default value") {
    this.a = a;
  }
}

SimplerClass.prototype.toString = function myClassToString() {
  let result = "";
  for (const [key, value] of Object.entries(this)) {
    result = result.concat(`${key}: ${value}\n`);
  }

  return result.trim();
};

console.log(new SimplerClass("simple").toString());
console.log(new SimplerClass().toString());
console.log(Object.entries(new SimplerClass("simple")));
console.log(Object.entries(new SimplerClass()));
