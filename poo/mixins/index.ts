console.log("Exemplo 1");
import "./exemplo1.ts";

console.log("----------------");
console.log("Exemplo 2 - Constrained Mixins");
import "./exemplo2.ts";

console.log("----------------");
console.log("Exemplo 3");
import "./exemplo3.ts";

// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

console.log("----------------");
console.log("Exemplo 4");
import "./exemplo4.ts";

console.log("----------------");
console.log("Exemplo 5");
import "./exemplo5.ts";
