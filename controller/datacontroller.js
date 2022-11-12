const asyncHandler = require("express-async-handler");
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const SubsData = asyncHandler(async(req , res) => {
    const {name , email} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("Please enter all the required feilds");
    }
    try{
        const database = client.db("subscriber");
        const collection = database.collection("subscriber");
        const insertdata = collection.insertOne({
            name: name, 
            email: email
        })
        if(insertdata){
            res.status(200).send("Data inserted successfully");
        }
        else{
            res.status(500).send("Error in adding data");
        }
    }
    catch(e){
        res.status(500);
        throw new Error(e.message);
    }
})

module.exports = SubsData;