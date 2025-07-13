// Cpp.ts 
// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
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
