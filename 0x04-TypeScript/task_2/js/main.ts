// main.ts
// create DirectorInterface

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// create TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// create Director class that implements DirectorInterface
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

// create Teacher class that implements TeacherInterface
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

// create createEmployee function
// that returns either a Director or a Teacher instance
// accepts 1 argument salary (either number or string)
// if salary is number and less than 500, return new Teacher. otherwise return Director
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// test cases
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

// isDirector function, accepts employee as argument
// used as type predicate and if the employee is a director
type Employee = Director | Teacher;
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function that accepts employee as argument
// if employee is a Director, call workDirectorTasks
// if employee is a Teacher, call workTeacherTasks
function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// test executeWork function
console.log(executeWork(createEmployee(200))); // Teacher
console.log(executeWork(createEmployee(1000))); // Director
