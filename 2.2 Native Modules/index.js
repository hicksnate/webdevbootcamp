const fs = require("fs");

fs.writeFile("message.txt", "Hello, from node.js!", (err) => {
    if (err) throw err;
    console.log('Hello, from node.js has been saved!');
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
  
let msgTxt = "Now Changing the Message.";

fs.writeFile("message.txt", msgTxt, (err) => {
    if (err) 
         throw err;
    else
         console.log('The file has been saved!');
});

// fs.readFile('message.txt', 'utf8', (err, data2) => {
    // if (err) throw err;
    // console.log(data2);
// });

