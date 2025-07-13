// React.ts
// a React Class in the same namespace.
// new attribute experienceTeachingReact? (number) to the Teacher interface
// write a method named getRequirements that will return a string Here is the list of requirements for React
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return 'Available Teacher: ' + this.teacher.firstName;
      } else {
        return 'No available teacher';
      }
    }
  }
}