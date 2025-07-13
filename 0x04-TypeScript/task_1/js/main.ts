// teacher interface
// firstName and lastName should only be modified when a teacher is initialized
// fullTimeEmployee and location should always be defined
// yearOfExperience is optional
// possibility to add any attribute to contract wihout specifying attribute name

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// extend teacher interface to Directors interface and add numberOfReports property
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
}
console.log(director1);

// printTeacher function
// accepts two arguments firstName and lastName
// returns the first letter of the firstName and the full lastName
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));
