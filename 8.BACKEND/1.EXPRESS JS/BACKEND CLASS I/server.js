
//Server instantiate 
const express=require('express');//creates a instance of express
const app=express();//name that instance app


//used to parse req.body in express ->PUT or Post
const bodyParser=require('body-parser');

//specifically parse json data and add it to the request.body object
app.use(bodyParser.json());


//activate the server on the port 3000
app.listen(3000,()=>{
    console.log("Server started at port number 3000");
})


//Routes
app.get('/',(req,res)=>{
    res.send("Hello bhaiLog");
})

app.post('/api/cars',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully")
})

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/myDatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection Successful")})
.catch((error)=>{console.log("Received an error")})