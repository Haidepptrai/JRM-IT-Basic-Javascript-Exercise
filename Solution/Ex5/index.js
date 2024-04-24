// Define a list to store students
let studentList = [];

// Function to add a new student
function addStudent() {
  // Get input values
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  // Create a student object
  let student = {
    name: name,
    age: age,
  };

  // Add the student object to the list
  studentList.push(student);

  // Call function to display the updated list
  displayStudents();
}

// Function to display the list of students
function displayStudents() {
  let studentListDiv = document.getElementById("student-list");
  studentListDiv.innerHTML = ""; // Clear previous content

  // Loop through the studentList array and display each student
  studentList.forEach(function (student, index) {
    let studentDiv = document.createElement("div");
    studentDiv.innerHTML = `<p><strong>Name:</strong> ${student.name}, <strong>Age:</strong> ${student.age}</p>`;
    studentListDiv.appendChild(studentDiv);
  });
}
