class X {
    constructor(a) {
        this.a = a;
    }
}
class Y extends X {
    print() {
        console.log("aaa=>", this.aa);
    }
}
const y = new Y(12);
console.log(y, y.a, y.aa);
y.print();
