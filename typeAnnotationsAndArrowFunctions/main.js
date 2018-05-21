var a; //1,2,3,4
var b; //true, false
var c; //'sid', 'apple'
var d; //1,'sid', true
var e; //[1,3,4,44]
var e1; //['a','s','d',']
var f; //{a:1}
a = 10;
b = true;
c = "sid";
d = 3020;
e = [20, 30, 40];
e1 = ['sid', 'apple', 'pine apple'];
f = { aa: 10, bb: 20, cc: { dd: 30 } };
// function getFullName(firstName, lastName){
//     return firstName + lastName;
// }
var getFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(getFullName('siddhu', 'nallasivam'));
