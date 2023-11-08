const express=require('express');
const student = require('./models/studentModel');
 const faculty = require('./models/facultyModel');
// const { set } = require('mongoose');
const app=express();
const PORT=5000;
const cors=require('cors');

app.use(express.json());
app.use(cors());

require('./db');

app.get("/",(req,res)=>{res.send("Hello World!.....");});

// app.get("/students",(req,res)=>{res.send("Hello from students!.....");});

// app.get("/faculty",(req,res)=>{res.send("Hello from faculty!....");});



app.post('/student',async (req,res)=>{
    try{
        const data=req.body;
        const createdStudent=new student(data);
        await createdStudent.save();
        res.send("student created");
    }
   catch(error){
    console.log(error);
   } 

});

app.get('/student', async(req,res)=>{
    try{
        const studentlist=await student.find();
        res.send(studentlist);
    }
   catch(error){
    console.log(error);

   } 

});

app.put("/student/:id", async (req,res)=>{
    try{
        const studentId=req.params.id;
        await student.updateOne({id:studentId},{$set:req.body});
        res.send(" student updated");   
    }
   catch(error){
    console.log(error);
   } 

});


app.delete("/student/:id", async (req,res)=>{
    try{
        await student.deleteOne({id:req.params.id});
        res.send(" student deleted");   
    }
    catch(error){
     console.log(error);
    }
});


//faculty


app.post('/faculty',async (req,res)=>{
    try{
        const data=req.body;
        const createdfaculty=new faculty(data);
        await createdfaculty.save();
        res.send("faculty created");
    }
   catch(error){
    console.log(error);
   } 

 });
app.get('/faculty', async(req,res)=>{
    try{
       const facultylist=await faculty.find();
        res.send(facultylist);
    }
   catch(error){
    console.log(error);

   } 

 });

 app.put("/faculty/:id", async (req,res)=>{
    try{
        const facultyId=req.params.id;
        await faculty.updateOne({id:facultyId},{$set:req.body});
        res.send(" faculty updated");   
    }
   catch(error){
    console.log(error);
   } 

});

app.delete("/faculty/:id", async (req,res)=>{
    try{
        await faculty.deleteOne({id:req.params.id});
        res.send(" faculty deleted");   
    }
    catch(error){
     console.log(error);
    }
});




//create a resourse
// app.post()

 app.listen(PORT,function(){console.log(`Server is running on port ${PORT}`)});
