export {};
let message = "hello farzadsnj";
console.log(message);

let myVal: unknown;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVal)) {
  console.log(myVal.name);
}

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
  lname: string;
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
