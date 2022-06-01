import mongoose from "mongoose";

// const {name}=data;
// const{id}=name;

const {Schema}=mongoose;

const userSchema = new Schema({
name: {
    type:String,
    required:true
},
email:
{
    type:String,
    required:true,
    unique:true
},
address:
{
    type:String,
    required:true
    
},
},
{timestamps:true}
)

export default mongoose.model("Users",userSchema)