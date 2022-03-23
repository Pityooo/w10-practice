// === COPY
// tömb másolás [...idejön amit másolni akarunk] --> kell a []

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// arr3-ba belemásoljuk az arr1 elemeit
const arr3 = [...arr1]
// az arr3-ba bepusholjuk a 6-os számot is
arr3.push(6)

console.log("arr1: ", arr1)
console.log("arr3: ", arr3)
// miközben másolunk, össze is rakjuk az arr1, és arr2 elemeit
const arr4 = [...arr1, ...arr2]
console.log("arr4: ", arr4)



const userProfile = {
    name: "Peter",
    age: 25,
    country: "Hungary"
}
// lemásoljuk a userProfile-t, majd hozzáadom a "gender" kulcsot, illetve megváltoztatom az eredeti kulcsot (név)
const userProfile2 = {...userProfile, gender: "male", name: "Ádám"}
console.log("userProfile: ", userProfile)
console.log("userProfile2: ", userProfile2)