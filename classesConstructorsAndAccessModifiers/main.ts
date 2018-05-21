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

class StudentClass{
    constructor(private studentDetails: Student){
        console.log('Constructor.......');
        console.log(studentDetails);
    }

    private logStudent(){
        console.log("Mark logged...")
    }

    getStudent(){
        console.log('Getter.......');
        this.logStudent();
        return this.studentDetails;
    }

    setStudent(studentDetails: Student){
        console.log('Setter.......');
        console.log(studentDetails);
    }


  };
  
  let siddhu = new StudentClass({
      rollNo: 1323,
      name:'siddhu',
      standard: Standard.first,
      section: Section.a,
      gender: Gender.male
  });

  console.log(siddhu.getStudent());

  siddhu.setStudent({
    rollNo: 001,
    name:'kousik siddhu',
    standard: Standard.second,
    section: Section.a,
    gender: Gender.male
  });
  
  