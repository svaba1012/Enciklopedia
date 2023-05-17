const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv")


dotenv.config();
const app = express();
app.use(bodyParser.json());



mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    app.listen(5000, () => {console.log("Server started on port 5000")});

}).catch(err => {
    console.log(err);
    console.log("Can't connect to database")
});

