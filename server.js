const express=  require("express")
const db=require('./database/connect')
const bodyParser=require('body-parser')   
const router = require ('./router/user')
const app=express()

app.use(bodyParser.urlencoded({
    extended:false 
})) 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " ,content-type");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    
    next();
  
  });

app.use(express.json( {extended:false}));
app.use(bodyParser.json());
db()
app.use("/user",router)


app.get("/",(req,res)=>{
res.send("bonjour a tous")
})

const port =5000
app.listen(port,()=>{console.log(`server run sur ${port}`) })