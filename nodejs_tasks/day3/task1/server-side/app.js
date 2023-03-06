const express=require("express");
const path=require("path");
const app=express();
const fs=require("fs")

let welcomeFile = fs.readFileSync("../client-side/welcome.html").toString();

let PORT=process.env.PORT || 8000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"../client-side/")))


app.get("/main.html",(req,res)=>{
  res.sendFile(path.join(__dirname,"../client-side/main.html") )
})

app.get("/welcome.html",(req,res)=>{
  res.sendFile(path.join(__dirname,"../client-side/welcome.html") )
})


app.post("/welcome.html",(req,res)=>{
  console.log(req.body);
  welcomeFile = welcomeFile.replace("{clientName}",req.body.client_name);
  welcomeFile = welcomeFile.replace("{ MobileNumber }",req.body.mobile_number);
  welcomeFile = welcomeFile.replace("{ Email }",req.body.email_address);
  welcomeFile = welcomeFile.replace("{ Address }",req.body.address);
  res.send(welcomeFile)

})







app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})