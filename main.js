"use strict";
exports.__esModule = true;
var message = 'hello farzadsnj';
console.log(message);
var myVal;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVal)) {
    console.log(myVal.name);
}
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 6);
add(5);
function fullName(person) {
    console.log("".concat(person.fname, " ").concat(person.lname));
}
var personF = {
    fname: 'farzad',
    lname: 'snj'
};
fullName(personF);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("welcome ".concat(this.employeeName));
    };
    return Employee;
}());
var em1 = new Employee('farzad');
console.log(em1.employeeName);
em1.greet();
