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
