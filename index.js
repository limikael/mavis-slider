const express=require("express");
const fs=require("fs");

const app=express();
const port=process.env.PORT||3000;

app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"));
app.get("/mqtt.js",(req,res)=>res.sendFile(__dirname+"/node_modules/paho-mqtt/paho-mqtt-min.js"));
app.get("/client.js",(req,res)=>res.sendFile(__dirname+"/client.js"));
app.get("/jquery.js",(req,res)=>res.sendFile(__dirname+"/node_modules/jquery/dist/jquery.js"));
app.get("/bootstrap.css",(req,res)=>res.sendFile(__dirname+"/node_modules/bootswatch/dist/materia/bootstrap.css"));

app.listen(port,()=>console.log("Listening to port: "+port));
