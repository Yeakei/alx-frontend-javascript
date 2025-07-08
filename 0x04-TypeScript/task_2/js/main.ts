// --- Interfaces ---
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

// --- Classes ---
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// --- Factory Function ---
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// --- Type Predicate ---
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// --- Function to Execute Work ---
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// --- Testing ---
console.log(executeWork(createEmployee(200))); // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks

// Literal type
type Subjects = "Math" | "History";

// Function that uses the literal type
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

// --- Testing ---
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History
