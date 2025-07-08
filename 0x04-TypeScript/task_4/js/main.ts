import { Subjects as CppSubjects } from "./subjects/Cpp";
import { Subjects as JavaSubjects } from "./subjects/Java";
import { Subjects as ReactSubjects } from "./subjects/React";

// Export constants for each Subject class
export const cpp = new CppSubjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Export a Teacher object with experienceTeachingC = 10
export const cTeacher: CppSubjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
};

// For Cpp Subject
console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java Subject
console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React Subject
console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
