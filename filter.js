// === FILTER
// kiszűr valamit, és beleteszi az új array-be (a többit kihagyja)

let arr = ["apple", 0, "0", null, NaN, undefined, false, {}]
let result = arr.filter(item => item)
console.log(result) //ami "truthy" lesz azt fogja returnölni csak