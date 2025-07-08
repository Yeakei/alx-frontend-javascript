// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Define Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Define the interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for constructor arguments
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface describing class structure
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass({ firstName: "Jane", lastName: "Doe" });
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); // Output: Currently working
