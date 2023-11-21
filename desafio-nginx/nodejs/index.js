const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafiodb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO pessoa(nome) values ('Thaís')`
connection.query(sql)
connection.end()


app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    var resultado = '<h1>Full Cycle Rocks!</h1>'

    connection.query(`SELECT * FROM pessoa`, function(err, rows) {
        rows.forEach(function (elem) { 
            console.log(elem.nome);
            resultado = resultado + ' ' + elem.nome;
        });

        res.send(resultado);
    })

    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})