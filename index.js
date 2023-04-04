var express = require('express');
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT

var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

//Routes
app.use("/", require("./routes"));


app.listen(PORT, console.log("Server has started at port " + PORT));