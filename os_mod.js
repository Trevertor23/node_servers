const os = require("os");

console.log('endianness : ' + os.endianness());  // закінчення CPU
console.log('type : ' + os.type()); // os type
console.log('platform : ' + os.platform()); // платформа ОС
console.log('total memory : ' + os.totalmem() + " bytes.");// Загальна пам'ять системи
console.log('free memory : ' + os.freemem() + " bytes.");// Вільна пам'ять