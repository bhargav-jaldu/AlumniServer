const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alumni'
})

db.connect((err) => {
    if(err) console.log(err)
    else console.log("mysql connected....")
})

// create database
let sql = 'CREATE DATABASE IF NOT EXISTS user;';
db.query(sql, (err, result) => {
    if(err) console.log(err)
    else console.log("created database succesfully....")
})


// creating table
let user = 'CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT, url VARCHAR(255),  message Text, time INT(10), PRIMARY KEY(id))';
db.query(user, (err, result) => {
    if(err) console.log(err)
    else console.log("user table created succesfully")
})

module.exports = db;