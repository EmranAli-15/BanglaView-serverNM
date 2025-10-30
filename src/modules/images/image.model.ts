import mongoose, { model, Schema } from "mongoose";

const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        required: false
    },
    postId: {
        type: Schema.ObjectId,
        required: true,
    }
});


export const Image = model("Image", imageSchema)