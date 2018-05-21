//------------ENUM AND INTERFACE

enum Gender { male = 'M', female = 'F' };
enum Standard { first, second, third, fourth, fifth };
enum Section {a, b, c, d };

interface Student {
    rollNo: number,
    name: string, 
    standard: Standard,
    section: Section,
    gender: Gender
};

let registerStudent = (student: Student) => {
    console.log(student);
}

registerStudent({
    rollNo: 1323,
    name: 'siddhu',
    standard: Standard.second,
    section: Section.a,
    gender: Gender.male
});
