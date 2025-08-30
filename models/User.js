const mongoose=require("mongoose");
const Schema=mongoose.Schema();

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ["user", "admin"],
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
});

const User=mongoose.model("User",userSchema);
module.exports=User;