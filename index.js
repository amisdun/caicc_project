const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const admin_router = require("./server/API/CAICC_routers/members_routers");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/dist/index.html")
});
app.use(cors());
app.use("/members", admin_router);

app.listen(port, function(){
    console.log("listening to port" + port);
});
module.exports = app;
