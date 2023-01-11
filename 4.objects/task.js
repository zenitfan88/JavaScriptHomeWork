function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    let grades = this.marks;
    if (grades !== undefined) {
        this.marks.push(...marks);
    };  
}

Student.prototype.getAverage = function () {
    let average;
    let grades = this.marks;
    if (grades === undefined || grades.length === 0) {
        average = 0;
    } else {
        average = (grades.reduce((a, b) => a + b, 0)) / grades.length;
    };
    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
