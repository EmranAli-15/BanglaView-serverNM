import { model, Schema, Types } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    youtubelink: {
        type: String,
        required: true
    },
    bannerimg: {
        type: String,
        required: true
    },
    images:{
        type: Types.ObjectId,
        ref: "Image"
    }
});

export const Post = model('Post', postSchema);