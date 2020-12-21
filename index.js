const fs = require('fs');

fs.writeFile('./texto.txt', 'linea_uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
})

console.log('ultima linea de codigo');
//
const users = query('SELECT * FROM users')

query('select * FROM users', function (err, users) {
    if (err) {
        console.log(err);
        if (users) {
            
        }
    }    
})