const mongoose=require('mongoose'); 

mongoose.connect('mongodb+srv://ANUSHA:ANUSHA@cluster0.ubqpsfq.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true})
.then((response)=>{console.log("connected to database");})
.catch((err)=>{console.log(err);});