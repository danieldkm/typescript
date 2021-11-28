// The type of generic functions is just like those of non-generic functions,
// with the type parameters listed first, similarly to function declarations:
function identity1<Type>(arg: Type): Type {
  return arg;
}

let myIdentity1: <Type>(arg: Type) => Type = identity1;

//We could also have used a different name for the generic type parameter in
//  the type, so long as the number of type variables and how the type
// variables are used line up.
function identity2<Type>(arg: Type): Type {
  return arg;
}

let myIdentity2: <Input>(arg: Input) => Input = identity2;

//We can also write the generic type as a call signature of an object literal type:
function identity3<Type>(arg: Type): Type {
  return arg;
}

let myIdentity3: { <Type>(arg: Type): Type } = identity3;

// Which leads us to writing our first generic interface.
// Let’s take the object literal from the previous example and move it
// to an interface:
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity4<Type>(arg: Type): Type {
  return arg;
}

let myIdentity4: GenericIdentityFn = identity4;

// In a similar example, we may want to move the generic parameter to be a
// parameter of the whole interface. This lets us see what type(s) we’re
// generic over (e.g. Dictionary<string> rather than just Dictionary).
// This makes the type parameter visible to all the other members of the interface.
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}

function identity5<Type>(arg: Type): Type {
  return arg;
}

let myIdentity5: GenericIdentityFn2<number> = identity5;
