const studentMarks = [
  { name: "Ganapathy", mark1: 67, mark2: 67, mark3: 35, mark5: 70 },
  { name: "test", mark1: 78, mark2: 78, mark3: 89, mark5: 70 },
  { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark5: 70 },
  { name: "3434", mark1: 99, mark2: 99, mark3: 99, mark5: 39 },
];
let pass = 0;
let fail = 0;
function updateDetails(details) {
  for (let index = 0; index < details.length; index++) {
    let element = details[index].mark1;
    let element1 = details[index].mark2;
    let element2 = details[index].mark3;
    let element3 = details[index].mark5;
    let studentTotal = element + element1 + element2 + element3;
    console.log(element, element1, element2, element3);
    console.log(studentTotal);
    if (element < 40 || element1 < 40 || element2 < 40 || element3 < 40) {
      console.log(
        details[index].name,
        ":",
        "fail",
        "----",
        (fail += 1),
        "----",
        studentTotal / 4
      );
    } else if (
      element > 40 ||
      element1 > 40 ||
      element2 > 40 ||
      element3 > 40
    ) {
      console.log(
        details[index].name,
        ":",
        "pass",
        "----",
        (pass += 1),
        "----",
        studentTotal / 4
      );
    }
  }
  console.log("===>", pass, "===>", fail);
}
updateDetails(studentMarks);

// const studentMarks = [
//   { name: "Ganapathy", mark1: 67, mark2: 67, mark3: 35, mark5: 70 },
//   { name: "test", mark1: 78, mark2: 78, mark3: 89, mark5: 70 },
//   { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark5: 70 },
//   { name: "3434", mark1: 99, mark2: 99, mark3: 99, mark5: 39 },
// ];
// function totalMark() {
//   for (let i = 0; i < studentMarks.length; i++) {
//     const element =
//       studentMarks[i].mark1 +
//       studentMarks[i].mark2 +
//       studentMarks[i].mark3 +
//       studentMarks[i].mark5;
//     console.log(studentMarks[i].name, ":", element);
//     // if (element) {
//     // }
//   }
// }
// totalMark();
// console.log("-----------------------------------");
// let mappedTotalMark = studentMarks.map((value, index, array) => {
//   //   console.log(value);
//   let studentTotalMark = value.mark1 + value.mark2 + value.mark3 + value.mark5;
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
//   let studentTotalMark = value.mark1 + value.mark2 + value.mark3 + value.mark5;
//   console.log(value.name, ":", studentTotalMark);
// });

// // Determine pass or fail (assuming pass if total marks >= 150)
// let filteredMark = studentMarks.filter((value, index) => {
//   return mappedTotalMark >= 150 ? "Pass" : "Fail";
// });
// console.log(value);

// Calculate pass percentage
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
