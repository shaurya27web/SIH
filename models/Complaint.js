const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const complaintSchema=new Schema(
    {
        text:{
            type:String,
            required:true,
        },
        summary:{
            type:String,
             default:"",
            required:true,
        },
        sentiment:{
            type:String,
            default:"neutral"
        },
         user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    },
    date:{
        type:Date,
        default:Date.now()
    },
}
);
const Complaint=mongoose.model("Complaint",complaintSchema);
module.exports=Complaint;