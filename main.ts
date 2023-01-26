export {};
let message = "hello farzadsnj";
console.log(message);

let isBoolean: boolean = true;
let total: number = 0;
let lname: string = "farzad";
let sentence: string = `my name is ${lname}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
// let isNew:boolean=null
let isNew2: undefined = undefined;

let list1:number[]=[1,2,3]
let list2:Array<number>=[1,2,3]
let person1: [string, number] =['farzad', 22]

enum Color {Red, Green, Blue}
let c: Color = Color.Green //1

let randomVal: any=10
randomVal=true
randomVal='farzad'
randomVal.toUpperCase()

let myVal: unknown=10

let multiType: number|boolean
multiType=20
multiType=true

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVal)) {
  console.log(myVal.name);
}

function add2(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

add2(5, 6);
add2(5);

function add(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

add(5, 6);
add(5);

interface Person {
  fname: string;
  lname?: string;
}

function fullName(person: Person) {
  console.log(`${person.fname} ${person.lname}`);
}

let personF = {
  fname: "farzad",
  lname: "snj",
};

fullName(personF);

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`welcome ${this.employeeName}`);
  }
}

let em1 = new Employee("farzad");
console.log(em1.employeeName);
em1.greet();

class manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`manager task`);
  }
}

let m1 = new manager("farzadsnj");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
