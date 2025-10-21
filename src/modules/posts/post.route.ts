import { Router } from "express";
import { postController } from "./post.controller";
const route = Router();

route.get("/getPosts", postController.getPosts);

route.post("/cretePost", postController.createPost);

route.put("/updatePost/:id", postController.updatePost);

route.get("/getSinglePost/:id", postController.getSinglePost);

export const postsRoute = route;