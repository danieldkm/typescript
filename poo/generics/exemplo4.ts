// Generic Classes
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "zero-";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 2));
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
