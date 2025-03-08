// challenge-1/gradeGenerator.js
function gradeGenerator() {
    let marks = parseInt(prompt("Enter student marks between 0 and 100:"));
  
    if (marks >= 80 && marks <= 100) {
      alert("Grade: A");
    } else if (marks >= 60 && marks <= 79) {
      alert("Grade: B");
    } else if (marks >= 50 && marks <= 59) {
      alert("Grade: C");
    } else if (marks >= 40 && marks <= 49) {
      alert("Grade: D");
    } else if (marks < 40 && marks >= 0) {
      alert("Grade: E");
    } else {
      alert("Invalid input. Please enter marks between 0 and 100.");
    }
  }
  
  gradeGenerator();
  