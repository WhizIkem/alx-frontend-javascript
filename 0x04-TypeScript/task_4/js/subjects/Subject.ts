// Subject.ts
// Subject class in the same namespace named Subjects.
// with an attribute teacher that implements the Teacher interface
// and a setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
