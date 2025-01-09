require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'passop';
const cors = require('cors');




const express = require('express')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors()); 

client.connect();
  console.log('Connected successfully to server');
  

  //get all the passwords
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

//save a password

app.post('/', async(req, res) => {

    const data=req.body;
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.insertOne(data);
    res.send(req.body)
})

app.delete('/', async(req, res) => {
    const username=req.body.username;
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.deleteOne({ username: username});
    res.send({success:true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})