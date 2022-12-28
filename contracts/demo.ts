import { SmartContract, method, prop, assert } from "scrypt-ts";

export default class Demo extends SmartContract {
  @prop()
  x: bigint;

  @prop()
  y: bigint;

  constructor(x: bigint, y: bigint) {
    super(x, y);
    this.x = x;
    this.y = y;
  }

  @method
  sum(a: bigint, b: bigint): bigint {
    return a + b;
  }

  @method
  public add(z: bigint) {
    assert(z == this.sum(this.x, this.y));
  }

  @method
  public sub(z: bigint) {
    assert(z == this.x - this.y);
  }
}

export function testFunc() {
  console.log("demooo: ", Demo);
}
