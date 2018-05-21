//------------ENUM AND INTERFACE
var gender;
(function (gender) {
    gender["male"] = "M";
    gender["female"] = "F";
})(gender || (gender = {}));
;
var standard;
(function (standard) {
    standard[standard["first"] = 0] = "first";
    standard[standard["second"] = 1] = "second";
    standard[standard["third"] = 2] = "third";
    standard[standard["fourth"] = 3] = "fourth";
    standard[standard["fifth"] = 4] = "fifth";
})(standard || (standard = {}));
;
var section;
(function (section) {
    section[section["a"] = 0] = "a";
    section[section["b"] = 1] = "b";
    section[section["c"] = 2] = "c";
    section[section["d"] = 3] = "d";
})(section || (section = {}));
;
;
var registerStudent = function (student) {
    console.log(student);
};
registerStudent({
    rollNo: 1323,
    name: 'siddhu',
    standard: standard.second,
    section: section.a,
    gender: gender.male
});
