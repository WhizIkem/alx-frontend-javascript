// Java.ts
// write a Java Class in the same namespace.
// Add a new attribute experienceTeachingJava? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
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
