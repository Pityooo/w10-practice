// === PROMISE
// állítás (1. épp történik valami, 2. valamit folytatólagosan csinálunk az eredménnyel, 3. )


const showMessageLater = (msg) => {    
    // csinálunk egy Promise-t object constructorral
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            if (msg === "Hello") {
                return reject("Something happened")
            }
            return resolve(msg)
        }, 1000);
    })
}

showMessageLater("Hello2").then((result) => {
    console.log(result)
    showMessageLater("Hello3").then((result) => {
        console.log(result)
        showMessageLater("Hello4").then((result) => {
            console.log(result)
        })
    })
}).catch((error) => {
    console.log(error)
})