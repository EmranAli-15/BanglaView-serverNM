import mongoose from "mongoose";
import { Post } from "./post.model";
import { Image } from "../images/image.model";
import AppError from "../../errors/AppError";

const createPost = async (payload: any) => {
    const { images, bannerimg, youtubelink, content, title } = payload;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const result = await Post.create(
            [
                {
                    bannerimg,
                    title,
                    youtubelink,
                    content
                }
            ],
            { session }
        );

        const imagesWithPostId = images.map((img: any) => (
            {
                url: img,
                postId: result[0]!._id
            }
        ));
        await Image.create(
            imagesWithPostId,
            { session, ordered: true }
        );

        await session.commitTransaction();
        return result

    } catch (error: any) {
        await session.abortTransaction();
        throw new AppError(500, "Post upload failed")
    }
    finally {
        session.endSession();
    }
};

const updatePost = async ({ id, payload }: { id: string, payload: any }) => {
    const result = await Post.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result;
}

const getPosts = async ({ numLimit, numPage }: { numLimit: number, numPage: number }) => {
    const result = await Post.find().skip((numPage - 1) * numLimit).limit(numLimit);
    return result;
}

const getSinglePost = async (id: string) => {
    const result = await Post.findById(id).populate("images");
    return result;
};

export const postService = {
    getPosts,
    getSinglePost,
    createPost,
    updatePost
};