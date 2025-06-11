const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.get("/getdata/:id", (req,res) => {
    console.log(req.params.id)
    res.send("Hello World")
})

app.post("/createdata",(req,res) => {
    const data= req.body
    console.log(data)
    res.send("Data Received")
})

const port=3001
app.listen(port,() => {
    console.log("server running",{port})
})