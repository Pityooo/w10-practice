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

// letisztultabb mint a .then-es megoldás
const newFunction = async () => {
    try {
        let result = "";
        result = await showMessageLater("Hello5")
        console.log(result)
        result = await showMessageLater("Hello6")
        console.log(result)
        result = await showMessageLater("Hello7")
        console.log(result)
        result = await showMessageLater("Hello")
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
newFunction()