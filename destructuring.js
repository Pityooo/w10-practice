// === DESTRUCTURING
// ha van egy objectünk, amiben kulcsértékpárok, akkor ezeket feltudjuk bontani {}-al, és változókként létre tudjuk hozni őket.
// hátránya, hogy nem tudjuk átnevezni a változót (pl.: name-ről name2-re)

// === DESTRUCTURING OBJECT-BEN ===

const userProfile = {
    name: "Peter",
    age: 25,
    country: "Hungary"
};

/* 
// kilogolva a name, és az age
const name = userProfile.name;
const age = userProfile.age;
*/

/* 
// ugyanez egyszerűbben DESTRUCTURING-el (fontos, hogy a megadott kulcs-nak egyezni kell, az objekt kulcsaival)
const {name, age} = userProfile;

console.log("name: ", name)
console.log("age: ", age)
*/

/* 
// ugyanez ARROW FUNCTIONNAL
const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name)
    console.log(incomingUser.age)
}
logNameAndAge(userProfile)
*/

/* 
// ARROW FUNCION + DESTRUCTURING
const logNameAndAge = ({name, age}) => {
    console.log("name: ", name)
    console.log("age: ", age)
}
logNameAndAge(userProfile)
*/

// === DESTRUCTURING TÖMB-BEN ===

const arr1 = [1, 2, 3, 4];

/* 
// kilogolva az első, és második eleme a tömbnek
const first = arr1[0];
const second = arr1[1];
console.log("first: ", first)
console.log("second: ", second)
*/

/* 
// ugyanez egyszerűbben DESTRUCTURING-el (tömb-nél mindegy mi a név, csak a sorrend a fontos)
const [c, d] = arr1;
console.log("c: ", c)
console.log("d: ", d)
*/


// spread operator "..." hozzáadja a többi elemet y-ként (nem csak a második elemet)
const [x, ...y] = arr1;
console.log("x: ", x)
console.log("y: ", y)