// Write an interface named Student that accepts the following elements:
// firstName(string), lastName(string), age(number), and location(string)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const studentOne: Student = {
    firstName: 'Olumide',
    lastName: 'Micheal',
    age: 23,
    location: 'Lagos',
}

const studentTwo: Student = {
    firstName: 'Tolulope',
    lastName: 'Micheal',
    age: 25,
    location: 'Canada',
}
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee (salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee instanceof Director) ? true : false;
}
// Funtion to check type of employee and establish the correct task
function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Write a String literal type named Subjects allowing a variable to have the value Math or History only.
// Write a function named teachClass:

type Subjects = "Math" | "History";
export function teachClass(todayClass: string) {
    if (todayClass === "Math" ) {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "";
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
// create an array named studentsList containing the two variables
const studentsList: Student[] = [studentOne, studentTwo];

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
let table = document.createElement('table');
let tableBody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = '#34ebeb'

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let nameCol = document.createElement('td');
    let locationCol = document.createElement('td');
    
    // Each row should contain the first name of the student and the location
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;
    nameCol.style.textAlign = 'center';
    locationCol.style.textAlign = 'center';
    nameCol.style.color = '#000';
    locationCol.style.color = '#000';
    nameCol.style.border = '1px dotted black';
    locationCol.style.border = '1px dotted black';
    nameCol.style.height = '300px';
    locationCol.style.height = '300px';
    
    row.appendChild(nameCol); // append the cell to the row
    row.appendChild(locationCol); // append the cell to the row
    tableBody.appendChild(row); // append the row to the tbody
});
table.appendChild(tableBody); // append the tbody to the table
document.body.appendChild(table); // append the table to the body