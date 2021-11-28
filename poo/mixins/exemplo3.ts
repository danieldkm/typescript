class Usuario {
  status: string;
}

type StatusConstructor<T = {}> = new (...args: any[]) => T;

type Status = StatusConstructor<{ status: string }>;

function Pending<TBase extends Status>(Base: TBase) {
  return class Pending extends Base {
    isPending(): boolean {
      // This mixin will only work if it is passed a base
      // class which has setPos defined because of the
      // Positionable constraint.
      if (this.status === "PENDENTE") {
        return true;
      }
      return false;
    }
  };
}

const StatusUsuario = Pending(Usuario);
const checkUsuario = new StatusUsuario();
console.log("isPending ? ", checkUsuario.isPending());
checkUsuario.status = "PENDENTE";
console.log("isPending ? ", checkUsuario.isPending());
