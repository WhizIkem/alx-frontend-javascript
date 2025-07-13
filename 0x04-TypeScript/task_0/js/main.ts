// main.ts
// interface Student

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create two students and an array of students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table and for each elements in the array 
// append a new row to the table 
// Each row should contain the first name of the student and the location

const table = document.createElement("table");

// create table header (thead)
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);

});
document.body.appendChild(table);
