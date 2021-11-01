const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes',), err => {
    if (err) throw err
  
    console.log('created')
 })                                              //створення теки 

fs.copyFile('text.txt','text1.txt',callback => {});  //копіювання файлу
let content = fs.readFileSync("./text1.txt");  //читання файлу
console.log(content.toString());  //виведення зчитаного