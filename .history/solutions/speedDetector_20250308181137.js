// challenge-2/speedDetector.js
function speedDetector() {
    let speed = parseInt(prompt("Enter the speed of the car:"));
  
    if (speed < 70) {
      alert("Ok");
    } else {
      let demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        alert("License suspended");
      } else {
        alert("Points: " + demeritPoints);
      }
    }
  }
  
  speedDetector();
  