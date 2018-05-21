//-------TYPE ANNOTATIONS
let aq:number; //1,2,3,4
let bq:boolean; //true, false
let cq:string; //'sid', 'apple'
let dq:any; //1,'sid', true
let eq:number[]; //[1,3,4,44]
let e1q:string[]; //['a','s','d',']
let fq:object; //{a:1}

aq = 10;
bq = true;
cq = "sid";
dq = 3020;
eq = [20,30,40];
e1q = ['sid','apple','pine apple'];
fq = {aa: 10, bb: 20, cc:{dd:30}};


//----------- ARROW FUNCTIONS

// function fullName(firstName, lastName){
//     return firstName + lastName;
// }

let fullName = (firstName:string, lastName:string):string => {
    return `${firstName} ${lastName}`;
}

//console.log(fullName('siddhu','nallasivam'));
