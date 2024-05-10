import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
    {
        authorId:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        chapters:[{
            chapterTitle:{
                type: String,
                required: true,
            },
            videoURL:{
                type: String,
                required: true,
            }
        }]
    }
);

export const Course = mongoose.model('eduSync', courseSchema);