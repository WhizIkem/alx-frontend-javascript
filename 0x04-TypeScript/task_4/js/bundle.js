var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Subject.ts
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
// Cpp.ts 
// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
// Java.ts
// write a Java Class in the same namespace.
// Add a new attribute experienceTeachingJava? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
// React.ts
// a React Class in the same namespace.
// new attribute experienceTeachingReact? (number) to the Teacher interface
// write a method named getRequirements that will return a string Here is the list of requirements for React
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var Subjects;
(function (Subjects) {
    var cpp = new Subjects.Cpp();
    var java = new Subjects.Java();
    var react = new Subjects.React();
    var cTeacher = {
        firstName: 'Guillaume',
        lastName: 'Salva',
        experienceTeachingC: 10
    };
    console.log('C++');
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    console.log('Java');
    java.setTeacher(cTeacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    console.log('React');
    react.setTeacher(cTeacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
