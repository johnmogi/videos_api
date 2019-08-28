// //types - strongly types: string,number,function, void, any , boolean
// // we need typescript compiler 
// const userName = "Gal amouyal"
// console.log(userName)

const numFirst : number = input1.value;
const numSecond : number = input2.value;
const numThird : number = input3.value;

hit.addEventListener("click", excercise1 );
hit2.addEventListener("click", excercise2 );
hit3.addEventListener("click", excercise3 );
hit4.addEventListener("click", excercise4 );



function excercise1(){ 

    const sum1 : number = parseInt(numFirst) + parseInt(numSecond) + parseInt(numThird);
    alert("the sum of " + numFirst + "+" + numSecond + "+" + numThird + "is" + ( sum1));
}

function excercise2(){ 

    const sum1 : number = (numFirst/ 3) +(numSecond /3 ) +(numThird/ 3);
    alert("the sum of " + numFirst + "+" + numSecond + "+" + numThird + "is" + ( sum1));
}

function excercise3(){ 

 const myArray : Array = [numFirst,numSecond,numThird]

 var chunks = function(myArray, size) {
    var results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, size));
      alert(results);
    }

    return results;
  };


}

function excercise4(){ 
const squared : number = prompt("second excercise, enter a number... we'll give you it's duplication by itself!")
alert(squared*squared)
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