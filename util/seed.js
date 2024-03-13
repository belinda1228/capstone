const dotenv = require('dotenv');
const sequelize = require('sequelize');

dotenv.config();
const {CONNECTION_STRING} = process.env;
const sql = new sequelize.Sequelize(CONNECTION_STRING);

 const SQL_CODE = `DROP TABLE IF EXISTS todos;
 CREATE TABLE mylist (
  	id SERIAL PRIMARY KEY,
 	task TEXT
);
 
 INSERT INTO mylist(task)
 VALUES ('tomato'),
 ('potato');`;

 sql.query(SQL_CODE).then(sqlResult=>{
    console.log('database seeded successfully');
 }).catch(err =>{
    console.log('failed', err);
 })