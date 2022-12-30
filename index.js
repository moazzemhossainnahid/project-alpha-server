const express = require('express')
const colors = require('colors')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const SSLCommerzPayment = require('sslcommerz-lts')
const bodyParser = require('body-parser')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xylkmyu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const run = async () => {
    try {

        client.connect();
        const helpCollection = client.db("AvailBox").collection("Orders");

        // Initialize app
        app.get('/', async (req, res) => {
            try {

                /** 
                * Root url response 
                */

                return res.status(200).json({
                    message: "Welcome to AvailBox Server App",
                    url: `${process.env.ROOT}/init`
                })
            } catch (error) {
                console.log(error);
            }
        })



    }
    finally {

    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Project Alpha Server");
});

app.listen(port, () => {
    console.log("Listen to Port", port);
});