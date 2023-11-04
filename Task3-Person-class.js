class Person {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAddress() {
    return this.address;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  setAddress(newAddress) {
    this.address = newAddress;
  }
}

// Example usage:
const person1 = new Person("Gawaskar", "Prakasam", 33, "Velachery,chennai");
console.log(person1.getFullName()); 
console.log(person1.getAddress());  
console.log(person1.getAge());      

person1.setAge(32);                
person1.setAddress("Salem-Main Buststand");  
console.log(person1.getAge());     
console.log(person1.getAddress()); 
