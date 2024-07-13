const studentMarks = [
  { name: "Ganapathy", mark1: 67, mark2: 67, mark3: 78, mark4: 70 },
  { name: "test", mark1: 78, mark2: 78, mark3: 89, mark4: 70 },
  { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark4: 70 },
  { name: "3434", mark1: 99, mark2: 99, mark3: 99, mark4: 39 },
];

let passedMembers = 0;
let failedMembers = 0;

function getTotalSubjects() {
  for (let count = 1; count < 10; count++) {
    if (!studentMarks["mark" + count]) {
      return count - 1;
    }
  }
}

function updateDetails(details) {
  for (let index = 0; index < details.length; index++) {
    let mark1 = details[index].mark1;
    let mark2 = details[index].mark2;
    let mark3 = details[index].mark3;
    let mark4 = details[index].mark4;
    let studentTotal = mark1 + mark2 + mark3 + mark4;
    details[index].total = studentTotal;
    details[index].percentage = studentTotal / getTotalSubjects();

    if (mark1 < 40 || mark2 < 40 || mark3 < 40 || mark4 < 40) {
      failedMembers += 1;
      console.log("Name: " + details[index].name, "Result: FAIL");
    } else if (mark1 > 40 || mark2 > 40 || mark3 > 40 || mark4 > 40) {
      passedMembers += 1;
      console.log("Name: " + details[index].name, "Result: PASS");
    }
    console.log(details[index]);
  }
  console.log(
    "Passed members - ",
    passedMembers,
    "Failed members - ",
    failedMembers
  );
  console.log("Pass % - " + (passedMembers / studentMarks.length) * 100 + "%");
}
updateDetails(studentMarks);

// const studentMarks = [
//   { name: "Ganapathy", mark1: 67, mark2: 67, mark3: 35, mark4: 70 },
//   { name: "test", mark1: 78, mark2: 78, mark3: 89, mark4: 70 },
//   { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark4: 70 },
//   { name: "3434", mark1: 99, mark2: 99, mark3: 99, mark4: 39 },
// ];
// function totalMark() {
//   for (let i = 0; i < studentMarks.length; i++) {
//     const mark1 =
//       studentMarks[i].mark1 +
//       studentMarks[i].mark2 +
//       studentMarks[i].mark3 +
//       studentMarks[i].mark4;
//     console.log(studentMarks[i].name, ":", mark1);
//     // if (mark1) {
//     // }
//   }
// }
// totalMark();
// console.log("-----------------------------------");
// let mappedTotalMark = studentMarks.map((value, index, array) => {
//   //   console.log(value);
//   let studentTotalMark = value.mark1 + value.mark2 + value.mark3 + value.mark4;
//   console.log(value.name, ":", studentTotalMark);
// });

// let filteredMaximumMark = mappedTotalMark.filter((value1, index1, array1) => {
//   console.log(value1);
// });

// let array111 = [3, 2, 5, 1];
// function sortArray() {
//   for (let index = 0; index < array111.length; index++) {
//     const element11 = array111[index];
//     let newOne = array111.sort((a, b) => {
//       return b - a;
//     });
//     console.log(element11, newOne);
//   }
// }
// sortArray();

// // Calculate total marks for each student and add it to the object
// let mappedTotalMark = studentMarks.map((value, index, array) => {
//   //   console.log(value);
//   let studentTotalMark = value.mark1 + value.mark2 + value.mark3 + value.mark4;
//   console.log(value.name, ":", studentTotalMark);
// });

// // Determine passedMembers or failedMembers (assuming passedMembers if total marks >= 150)
// let filteredMark = studentMarks.filter((value, index) => {
//   return mappedTotalMark >= 150 ? "Pass" : "Fail";
// });
// console.log(value);

// Calculate passedMembers percentage
// const totalStudents = studentMarks.length;
// const passedStudents = studentMarks.filter(
//   (student) => student.passed === "Pass"
// ).length;
// const passPercentage = (passedStudents / totalStudents) * 100;

// // Find top three ranks based on total marks
// const sortedByMarks = studentMarks.sort((a, b) => b.totalMarks - a.totalMarks);
// const topThreeRanks = sortedByMarks.slice(0, 3);

// console.log("Student Marks with Total and Pass/Fail:");
// console.log(studentMarks);
// console.log("Pass Percentage:", passPercentage.toFixed(2) + "%");
// console.log("Top Three Ranks:");
// console.log(topThreeRanks);
