const path = require('path');

console.log(__filename); //абсолютний шлях до файлу
console.log(path.basename(__filename)); //назва файла
console.log(path.dirname(__filename)); //шлях до файлу
console.log(path.extname(__filename)); //розширення файлу

console.log(path.parse(__filename)); /*{
    root: 'C:\\',
    dir: 'C:\\Users\\bogda\\Desktop\\prakt_2\\Day8_pt2',
    base: 'path_mod.js',
    ext: '.js',
    name: 'path_mod'
  }*/

console.log(path.join(__dirname, 'test', 'second.html')); //C:\Users\bogda\Desktop\prakt_2\Day8_pt2\test\second.html

console.log(path.resolve(__dirname, './test', 'second.html')); //фактично теж саме що й join


