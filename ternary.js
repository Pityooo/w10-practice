// TERNARY OPERATOR
//  egyszerűbb, rövidebb kód, de nehezebb olvasni

const [min, max] =  [5, 30]

/* 
// sima IF-ELSE
if (min < max) {
    console.log("Min is lower than Max")
} else {
    console.log("Min is NOT lower than Max")
}
*/

/* 
// ugyanez TERNARY OPERATORRAL:
min < max ? console.log("Min is lower than Max") : console.log("Min is NOT lower than Max")
*/


// backtick-ek közé írjuk az if-else-t ternary operatorral
console.log(`Min is ${min < max ? "" : "NOT"} lower than Max`)

