import { Request, Response } from "express";
import { postService } from "./post.service";
import { handleAsync } from "../../utils/handleAsync";

const createPost = handleAsync(
    async (req: Request, res: Response) => {
        const data = req.body;
        const result = await postService.createPost(data);

        res.status(201).json({
            data: result,
            message: "Post upload successfull."
        })
    }
)

const updatePost = handleAsync(
    async (req: Request, res: Response) => {
        const data = req.body;
        const { id } = req.params;
        const result = await postService.updatePost({ id: id as string, payload: data });

        res.status(201).json({
            data: result,
            message: "Post updated successfull."
        })
    }
)

const getPosts = handleAsync(
    async (req: Request, res: Response) => {
        const data = await postService.getPosts();

        res.status(200).json({
            data: data,
            message: "Posts retrieved successfull."
        })
    }
)

const getSinglePost = handleAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const data = await postService.getSinglePost(id as string);

        res.status(200).json({
            data: data,
            message: "Post retrieved successfull."
        })
    }
)

export const postController = {
    getPosts,
    getSinglePost,
    createPost,
    updatePost
}