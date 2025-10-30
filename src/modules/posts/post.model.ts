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
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


postSchema.virtual("images", {
    ref: "Image",
    localField: "_id",
    foreignField: "postId"
});

export const Post = model('Post', postSchema);