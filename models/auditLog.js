const mongoose=require("mongoose");
const Schema=mongoose.Schema();

const auditSchema=new Schema({
    timeStamp:{
     type:Date,
     default:Date.now()
    },
    details:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId() ,ref:"User"
    },
    action:{
        type:String,
        required:true
    }
});
 
module.exports=mongoose.Schema(auditSchema,"AuditSchema");
