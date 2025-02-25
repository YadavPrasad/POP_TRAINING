const express = require("express");
const mdb = require("mongoose");
const dotenv = require('dotenv')
const app = express();
const PORT = 3001;
const signup = require('./models/signupSchema')
dotenv.config()
app.use(express.json())

mdb
  .connect("mongodb+srv://yadavprasadexe:yadavprasadexe@cluster.aqxtw.mongodb.net/")
  .then(() => {
    console.log("MDB connection succesful");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server </h1>");
});

app.listen(PORT, () => console.log("Server started successfully."));

app.post("/signup",(req,res)=>{
  try{
    const{firstName,lastName,email,password,phoneNumber} = req.body;
  const newSignup = new Signup({
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber,
    password:password,
    email:email
  })
  newSignup.save();
  console.log("Signup Succesful")
  res.status(201).json({message:"Signup Succsesful",isSignup:true})

  } catch(error){
    console.error("Signup Error:", error)
    res.status(201).json({message:"Signup Unsuccsesful",isSignup:false})

  }
  
})