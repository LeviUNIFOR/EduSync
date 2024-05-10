import mongoose from "mongoose";

const accSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
);

export const Acc = mongoose.model('SyncEdu', accSchema);