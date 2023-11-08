const mongoose=require('mongoose');

const studentSchema= mongoose.Schema({
    id:Number,
    name:String,
    sem:Number,
    email:String,
    branch:String,
    phone:Number
});
module.exports=mongoose.model("Student",studentSchema);