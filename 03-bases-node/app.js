const fs = require('fs');

let base  = 2;

for( let i = 1;i <= 10; i++){
    console.log(`${base} x ${i} = ${base*i}`);
}

fs.writeFile('tabla-2.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });