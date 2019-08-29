// //types - strongly types: string,number,function, void, any , boolean
// // we need typescript compiler 
// const userName = "Gal amouyal"
// console.log(userName)
var numFirst = input1.value;
var numSecond = input2.value;
var numThird = input3.value;
hit.addEventListener("click", excercise1);
hit2.addEventListener("click", excercise2);
hit3.addEventListener("click", excercise3);
hit4.addEventListener("click", excercise4);
function excercise1() {
    var sum1 = parseInt(numFirst) + parseInt(numSecond) + parseInt(numThird);
    alert("the sum of " + numFirst + "+" + numSecond + "+" + numThird + "is" + (sum1));
}
function excercise2() {
    var sum1 = (numFirst / 3) + (numSecond / 3) + (numThird / 3);
    alert("the sum of " + numFirst + "+" + numSecond + "+" + numThird + "is" + (sum1));
}
function excercise3() {
    var myArray = [numFirst, numSecond, numThird];
    var chunks = function (myArray, size) {
        var results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, size));
            alert(results);
        }
        return results;
    };
}
function excercise4() {
    var squared = prompt("second excercise, enter a number... we'll give you it's duplication by itself!");
    alert(squared * squared);
}
// const userName2: string = "Gal amouyal"
// console.log(userName)
// const e: string = "galam@gmail.com";
// const p: number = 12345678;
// const user = { email: e, password: p }
// console.log(user);
// class Company {
//     public companyName: string;
//     constructor(_companyName: string) {
//         this.companyName = _companyName
//     }
// }
// const obj = {
//     "name": "gal",
//     "age": 121342,
//     "pass": null,
//     "address": {
//         "city": "ashdod",
//         "zipcode": 77812
//     }
// }
