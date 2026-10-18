const student = {
    name: "kavya",
    marks: [85, 92, 76, 68, 90]
};

let total = 0;
let result = "Pass";

for (let i = 0; i < student.marks.length; i++) {
    total += student.marks[i];

    if (student.marks[i] < 35) {
        result = "Fail";
    }
}

let percentage = total / student.marks.length;
let grade;

if (result === "Fail") {
    grade = "F";
} else if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "D";
}

console.log("Student Name:", student.name);
console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
console.log("Result:", result);