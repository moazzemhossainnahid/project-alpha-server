const express = require('express')
const colors = require('colors')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const SSLCommerzPayment = require('sslcommerz-lts')
const bodyParser = require('body-parser')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');