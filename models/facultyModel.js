const mongoose=require('mongoose');

const facultySchema= mongoose.Schema({
    id:Number,
    name:String,
    post:String,
    email:String,
    department:String

});
module.exports=mongoose.model("faculty",facultySchema);