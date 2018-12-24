const fs = require("fs");
let names = JSON.parse(fs.readFileSync("names.json")).names;
let spamURL = 'https://www.mobileiman.com/imgs/sch/uiowa/uiowa.php';
const axios = require('axios');
let randomName = names[randomNumber(names.length)] + names[randomNumber(names.length)] + randomNumber(10);

for (let i = 0; i < 1000; i++) {
    axios.post(spamURL, {
        username: randomName,
        password: randomPassword(randomNumber(15))
    })
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
      })
    .catch((error) => {
        console.error(error)
    })
}

function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

function randomPassword(size) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < size; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }