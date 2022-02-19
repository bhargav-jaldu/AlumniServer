const express = require('express')
const mysql = require('mysql')
const app = express();
const cors = require('cors')

 app.use(cors());
 app.use(express.json());

const db = require('./dbConfig')

app.get('/', (req, res) => {
    res.send('Alumni root route')
})

app.post('/message', (req, res) => {
    const message = req.body.message;
    const url = req.body.url
    const time = req.body.time;

     db.query("INSERT INTO user (url, message, time) VALUES (?, ?, ?)", [url, message, time], (err, result) => {
         if(err) {
            console.log(err)
         }
         else {
            res.json({message: "inserted succesfully"})
         }
     })
})

app.get('/message', (req, res) => {
    const url = req.query.url

    db.query("SELECT * FROM user WHERE url = ?", [url], (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.json({message: result})
        }
    })
})

app.listen('3001', () => {
    console.log('Server running on port 3001')
})