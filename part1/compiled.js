"use strict";
function add(a, b) {
    return a + b;
}
const sum = add(1, 2);
class Parent {
    foo() {
    }
}
class Child extends Parent {
    eat(food) {
        console.log('eat');
    }
    foo() {
    }
}