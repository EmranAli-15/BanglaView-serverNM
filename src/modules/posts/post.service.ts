import { Post } from "./post.model";

const createPost = async (payload: any) => {
    const result = await Post.create(payload);
    return result;
};

const updatePost = async ({ id, payload }: { id: string, payload: any }) => {
    const result = await Post.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result;
}

const getPosts = async () => {
    const result = await Post.find();
    return result;
}

const getSinglePost = async (id: string) => {
    const result = await Post.findById(id);
    return result;
};

export const postService = {
    getPosts,
    getSinglePost,
    createPost,
    updatePost
};