// Initialize click counts for each person
let person1ClickCount = 0;
let person2ClickCount = 0;
let person3ClickCount = 0;

// Function to update click count for Person 1
function updatePerson1ClickCount() {
  person1ClickCount++;
  document.getElementById("person1Count").innerText = person1ClickCount; // Update the displayed click count
  checkNextDriver(); // Check who the next driver will be
}

// Function to update click count for Person 2
function updatePerson2ClickCount() {
  person2ClickCount++;
  document.getElementById("person2Count").innerText = person2ClickCount; // Update the displayed click count
  checkNextDriver(); // Check who the next driver will be
}

// Function to update click count for Person 3
function updatePerson3ClickCount() {
  person3ClickCount++;
  document.getElementById("person3Count").innerText = person3ClickCount; // Update the displayed click count
  checkNextDriver(); // Check who the next driver will be
}

// Function to determine the next driver based on click counts
function checkNextDriver() {
  const totalClicks = person1ClickCount + person2ClickCount + person3ClickCount;

  let nextDriver;
  if (person1ClickCount < person2ClickCount && person3ClickCount ) {
    nextDriver = "Person 1";
  } 
  else if (person2ClickCount < person1ClickCount && person3ClickCount ) {
    nextDriver = "Person 2";
  } 
  else if (person3ClickCount < person1ClickCount && person2ClickCount ) {
    nextDriver = "Person 3";
  } else {
    // Randomly select next driver if click counts are equal
    nextDriver = Math.random() < 0.3333 ? "Person 1" : Math.random() < 0.5 ? "Person 2" : "Person 3";
  }

  document.getElementById("nextDriver").innerText = nextDriver; // Update the displayed next driver
}
