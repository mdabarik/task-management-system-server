const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());


/************ MongoDB Connection ************/
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mdabarik24:1QwkRLvtESJWSk3R@cluster0.lfhefzg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        /** -------- API's Route --------- **/


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Root route ...");
})

app.listen(port, () => {
    console.log('Server is running..');
})