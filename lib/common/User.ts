export class User {
  name: string; 
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // public method
  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }

  toJSON() {
    return {
      name: this.name,
      age: this.age,
    }
  }
}