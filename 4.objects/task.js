function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let Student1 = new Student("Маша", "Женский", 19);
let Student2 = new Student("Петя", "Мужской", 59);
console.log(Student1);
console.log(Student2);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks);
  } else {
    this.marks = [marks];
  }
  /* this.marks === [marks]; */
  /* this.marks.push(...marks); */
};

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks[i];
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
