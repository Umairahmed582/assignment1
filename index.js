console.log("Hello class 1");
let a = "umair"; //type inferance
let b = "TS 011"; //explicity define type
console.log(a);
console.log(b);
const c = null; //explicit typing
console.log(c);
let d = undefined;
console.log(d);
let haspass = false;
// if(condition){ 
//}
let x = prompt("Where does the Pope live?");
let correctAnswer = "Pakistan";
if (x == correctAnswer) {
    alert("Correct!");
}
function getFavoriteNumber() {
    return 26;
}
let sub1 = (x, y) => {
    return x - y;
};
sub1(10, 20); //returns 10
let sub2 = (x, y) => x - y; //can skip return
sub2(3, 4); //returns 1
export {};
