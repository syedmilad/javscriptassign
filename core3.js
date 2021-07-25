// question #3
function Persons(first, last, age, id) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.id = id;
};
var Student1 = new Persons("syed", "milad", 22, 17321);
var Student2 = new Persons("syed", "abdullah", 23, 17322);
console.log(Student1, Student2);