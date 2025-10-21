import { model, Schema } from "mongoose";

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
});

export const Post = model('Post', postSchema);