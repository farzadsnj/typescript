"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "hello farzadsnj";
console.log(message);
var isBoolean = true;
var total = 0;
var lname = "farzad";
var sentence = "my name is ".concat(lname);
console.log(sentence);
var n = null;
var u = undefined;
// let isNew:boolean=null
var isNew2 = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['farzad', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; //1
var randomVal = 10;
randomVal = true;
randomVal = 'farzad';
randomVal.toUpperCase();
var myVal = 10;
var multiType;
multiType = 20;
multiType = true;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVal)) {
    console.log(myVal.name);
}
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add2(5, 6);
add2(5);
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
    fname: "farzad",
    lname: "snj"
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
var em1 = new Employee("farzad");
console.log(em1.employeeName);
em1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.delegateWork = function () {
        console.log("manager task");
    };
    return manager;
}(Employee));
var m1 = new manager("farzadsnj");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
