const express = require('express');
// const mysql = require('mysql');

const app = express();

const db = require('./models');

const {MyTable} = require('./models')

app.get('/insert', (req, res) => {
    MyTable.create({
        firstName: 'Keith',
        age: '25'
    }).then(myTable => {
        res.send(myTable);
    }
    );
}
);

app.get('/select', (req, res) => {
    MyTable.findAll().then(myTable => {
        res.send(myTable);
    }
    );
}
);
app.get('/selectOne', (req, res) => {
    MyTable.findAll({where: {firstName:"John"}}).then(myTable => {
        res.send(myTable);
    }
    );
}
);
app.get('/update', (req, res) => {
        res.send('Update');
        }
        );
app.get('/delete', (req, res) => {
    MyTable.destroy({where: {id:10}})
    res.send(`Deleted`);
}
); 
db.sequelize.sync().then((req) => {
    app.listen(4321, () => {
        console.log('Server is running on port 4321');
    }
    );
}
).catch(err => {
    console.log(err);
}
);

// app.use(express.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '@Ata287693',
//     database: 'rxgoodness'
// });
// db.connect();
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }
// );
// app.get('/users', (req, res) => {
//     const sql = `SELECT * FROM users`
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// }
// );
// app.listen(4110, () => {
//     console.log('Server is running on port 4110');
// }   
// );
