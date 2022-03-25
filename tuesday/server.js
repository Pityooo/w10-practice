/*
// express változóban meghívjuk kívülről az express-t
const express = require('express');
// app változó = expressz() -> ez hozza létre az express servert
const app = express();
// http, fs változókban meghívjuk kívülről az http, ft-t
const http = require('http');
const fs = require('fs');
// a szerver a 9000-es porton fog futni
const port = 9000;
// ha "get" kérést kap a szerver a localhost:9000-re ('/'), akkor futtassa a funkciót
app.get('/', (request, response) => {
    // megpróbálja ez a kódot teljesíteni
    try {
        // a result változó kulcs-értéke a name: "HelloWorld!", és az age: 30
        //const result = { name: "HelloWorld!", age: 30}
        // a result változóban meghívom a data.json fájlt
        const result = require('./data.json')
        console.log(result.cards)
        // válaszként (response) a result változó tartalma lesz visszaküldve(.send())
        response.send(result)
        // ha nem sikerül, abban az esetben (error esetén)  
    } catch (error) {
        // válaszként magát az errort írja ki
        response.send(error)
    }
})
// elindítja a szervert a megadott porton(port változóra hivatkozunk), és várakozik a kérésekre (listen)
app.listen(port, () => {
    console.log(`Server runs on port ${port}`)
})
*/

const http = require('http');
const fs = require('fs');
const port = 9000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200);
    fs.readFile('index.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error:File not found')
        } else{
            let dataObj = require('./data.json');
            JSON.stringify(dataObj);
            res.write(data)            
        }
        res.end()
    })
});

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})