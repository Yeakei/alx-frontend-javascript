interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "New York",
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 25,
    location: "London",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create a table and populate it
const table = document.createElement("table");
const tableHeader = document.createElement("tr");
tableHeader.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(tableHeader);

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
