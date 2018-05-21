var Gender;
(function (Gender) {
    Gender["male"] = "M";
    Gender["female"] = "F";
})(Gender || (Gender = {}));
;
var Standard;
(function (Standard) {
    Standard[Standard["first"] = 0] = "first";
    Standard[Standard["second"] = 1] = "second";
    Standard[Standard["third"] = 2] = "third";
    Standard[Standard["fourth"] = 3] = "fourth";
    Standard[Standard["fifth"] = 4] = "fifth";
})(Standard || (Standard = {}));
;
var Section;
(function (Section) {
    Section[Section["a"] = 0] = "a";
    Section[Section["b"] = 1] = "b";
    Section[Section["c"] = 2] = "c";
    Section[Section["d"] = 3] = "d";
})(Section || (Section = {}));
;
;
var StudentClass = /** @class */ (function () {
    function StudentClass(studentDetails) {
        this.studentDetails = studentDetails;
        console.log('Constructor.......');
        console.log(studentDetails);
    }
    StudentClass.prototype.logStudent = function () {
        console.log("Mark logged...");
    };
    StudentClass.prototype.getStudent = function () {
        console.log('Getter.......');
        this.logStudent();
        return this.studentDetails;
    };
    StudentClass.prototype.setStudent = function (studentDetails) {
        console.log('Setter.......');
        console.log(studentDetails);
    };
    return StudentClass;
}());
;
var siddhu = new StudentClass({
    rollNo: 1323,
    name: 'siddhu',
    standard: Standard.first,
    section: Section.a,
    gender: Gender.male
});
console.log(siddhu.getStudent());
siddhu.setStudent({
    rollNo: 001,
    name: 'kousik siddhu',
    standard: Standard.second,
    section: Section.a,
    gender: Gender.male
});
