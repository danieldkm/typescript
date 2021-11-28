// Working with Generic Type Variables
/**
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
---> Property 'length' does not exist on type 'Type'.
  return arg;
}
 *
 */
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

let output = loggingIdentity<string>(["myString"]);
console.log("output", output);

let output2 = loggingIdentity2<string>(["myString"]);
console.log("output2", output2);
