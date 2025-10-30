import mongoose, { model, Schema } from "mongoose";

const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        required: false
    },
    postId: {
        type: Schema.ObjectId,
        required: true,
        ref: "Post"
    }
});


export const Image = model("image", imageSchema)