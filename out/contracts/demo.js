var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SmartContract, method, prop, assert } from "scrypt-ts";
export default class Demo extends SmartContract {
    x;
    y;
    constructor(x, y) {
        super(x, y);
        this.x = x;
        this.y = y;
    }
    sum(a, b) {
        return a + b;
    }
    add(z) {
        assert(z == this.sum(this.x, this.y));
    }
    sub(z) {
        assert(z == this.x - this.y);
    }
}
__decorate([
    prop()
], Demo.prototype, "x", void 0);
__decorate([
    prop()
], Demo.prototype, "y", void 0);
__decorate([
    method
], Demo.prototype, "sum", null);
__decorate([
    method
], Demo.prototype, "add", null);
__decorate([
    method
], Demo.prototype, "sub", null);
Reflect.defineMetadata("scrypt:file", "contracts/demo.scrypt", Demo);
Reflect.defineMetadata("__filename", __filename, Demo);
export function testFunc() {
    console.log("demooo: ", Demo);
}
