const express = require('express');
const app = express();
const server = require('http').Server(app);


const mongoose = require('mongoose'); 


mongoose.connect("mongodb://localhost:27017/usersDB", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('error in connecting');
});

mongoose.set("useCreateIndex", true)

const productSchema = new mongoose.Schema ({
    productname:{
        type : String
    } ,
    price:{
        type : String
    } ,
    description: {
        type : String
    }
});

const Product = new mongoose.model("Product", productSchema);