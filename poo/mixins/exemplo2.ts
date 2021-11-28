// This was our previous constructor:
// type Constructor = new (...args: any[]) => {};
// Now we use a generic version which can apply a constraint on
// the class which this mixin is applied to
type GConstructor<T = {}> = new (...args: any[]) => T;
class Sprite2 {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
  setPos(x: number, y: number) {
    console.log(x, y);
  }
}
type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite2>;
type Loggable = GConstructor<{ print: () => void }>;
function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      // This mixin will only work if it is passed a base
      // class which has setPos defined because of the
      // Positionable constraint.
      this.setPos(0, 20);
    }
  };
}
class TestePositionable {
  setPos(x: number, y: number) {
    console.log(x, y);
  }
}
const JumpWithPositionable = Jumpable(TestePositionable);
const jwp = new JumpWithPositionable();
jwp.jump();
