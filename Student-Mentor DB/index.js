const path = require('path');
const express = require('express');
const mongodb = require('mongodb');
const dotenv = require('dotenv').config();
const client = mongodb.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const url = process.env.DB_URL || "mongodb://localhost:27017";


app.use(express.static(path.join(__dirname, "files")));
app.use(bodyParser.json());
app.use(cors());



app.get('/api/mentor', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let data = await db.collection("mentor").find().toArray();
        await connection.close();
        res.status(200).json(data);
    } catch (error) {
        res.json({ msg: `issue with connection ${error}` })
    }

})


app.post('/api/mentor', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let data = await db.collection("mentor").insertOne(req.body);
        await connection.close();
        res.json({ msg: "Mentor added!!" });

    } catch (err) {
        console.log("error: " + err);
    }

})



app.put('/api/mentor/:id', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let newValue = { $set: { "name": req.body.name } };
        let data = await db.collection("mentor").updateOne({ "_id": mongodb.ObjectID(req.params.id) }, newValue)
        await connection.close();
        res.redirect(301, "/api/mentor");
    } catch (error) {
        res.send("error: " + err);
    }
})



app.delete('/api/mentor/:id', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let deleteddata = await db.collection('mentor').deleteOne({ "_id": mongodb.ObjectID(req.params.id) });
        await connection.close();
        res.json({ msg: "Mentor deleted" });
    } catch (err) {
        res.json({ msg: "issue with connection for deletion" })
    }
})



app.get('/api/student', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let data = await db.collection("student").find().toArray();
        await connection.close();
        res.status(200).json(data);
    } catch (error) {
        res.json({ msg: `issue with connection ${error}` })
    }

})


app.get('/api/student/:mentorname', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let data = await db.collection("student").find({ "mentor": req.params.mentorname }).toArray();
        await connection.close();
        res.status(200).json(data);
    } catch (error) {
        res.json({ msg: `issue with connection ${error}` })
    }

})


app.post('/api/student', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let data = await db.collection("student").insertOne(req.body);
        await connection.close();
        res.json({ msg: "Student added!!" });

    } catch (err) {
        console.log("error: " + err);
    }

})



app.put('/api/student/:id', async(req, res) => {
    try {
        let connection = await client.connect(url);
        let db = connection.db("mentor_task");
        let newValue = { $set: { "mentor": req.body.name } };
        let data = await db.collection("student").updateOne({ "_id": mongodb.ObjectID(req.params.id) }, newValue)
        await connection.close();
        res.json({ msg: "mentor name for the student is updated" });
    } catch (error) {
        res.send("error: " + err);
    }
})


app.listen(4000);