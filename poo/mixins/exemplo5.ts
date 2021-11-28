class Pendincy {
  status: string;
  isPending() {
    if (this.status === "PENDING") {
      return true;
    }
    return false;
  }
}
class Validable {
  status: string;
  isValid() {
    if (this.status === "VALIDATE") {
      return true;
    }
    return false;
  }
}
class User {
  name: string;
  status: string;
  constructor(name: string, status: string) {
    this.name = name;
    this.status = status;
  }
}

interface User extends Pendincy, Validable {}
applyMixins2(User, [Pendincy, Validable]);
// // This can live anywhere in your codebase:
function applyMixins2(derivedCtor: any, constructors: any[]) {
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

const user = new User("DKM", "PENDING");
console.log("status is pending ?", user.isPending());
console.log("status is valid ?", user.isValid());

user.status = "VALIDATE";
console.log("status is pending ?", user.isPending());
console.log("status is valid ?", user.isValid());
