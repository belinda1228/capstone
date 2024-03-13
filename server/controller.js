require('dotenv').config();
const Sequelize = require('sequelize');

const {CONNECTION_STRING} = process.env;
console.log(CONNECTION_STRING)
const sql = new Sequelize("postgres://postgres:admin@localhost:5432/mylist");

module.exports = {
    getMyList: (req,res)=>{
        sql.query('SELECT * FROM mylist;').then(sqlResult =>{
            const data = sqlResult[0];
            res.status(200).send(data);
        }).catch(err =>{
            res.status(500).send(err);
        });
    },
    addItem: (req,res)=>{
        console.log(req.body)
        const task = req.body.task;
        const SQL_CODE = `INSERT INTO mylist (task)
        VALUES ('${task}');`;
        console.log(SQL_CODE)
        sql.query(SQL_CODE).then(sqlResult =>{
            res.status(200).end();
        }).catch(err =>{
            console.log(err)
            res.status(500).send(err);
        });
    },
    deleteItem: (req, res) => {
        let index = item.findIndex(elem => elem.id === +req.params.id)
        item.splice(index, 1)
        res.status(200).send(item)
    },
};