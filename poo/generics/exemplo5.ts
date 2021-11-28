// Generic Constraints
/**
 function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
Property 'length' does not exist on type 'Type'.
  return arg;
}
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// loggingIdentity(3);
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentity({ length: 10, value: 3 });
