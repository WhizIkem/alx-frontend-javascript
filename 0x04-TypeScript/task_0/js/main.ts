interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 28,
  location: 'Paris',
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  table.style.borderCollapse = 'collapse';
  table.style.width = '50%';
  table.style.marginTop = '20px';
  table.style.border = '1px solid black';

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});