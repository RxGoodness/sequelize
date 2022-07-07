const express = require('express');
const mysql = require('mysql');

const app = express();

// app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Ata287693',
    database: 'goodness'
});
db.connect();
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }
// );
app.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
);



app.listen(4110, () => {
    console.log('Server is running on port 4110');
}   
);
