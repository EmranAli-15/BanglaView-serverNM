import express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { postsRoute } from './modules/posts/post.route';

const app = express();
const port = 5000;

env.config();
app.use(express.json());
app.use(cors());


app.use("/api", postsRoute);
// app.use("/api", imagesRoute);
// app.use("/api", commentsRoute);


app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Server is running."
    });
})


const main = async () => {
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log("DB connected");
    } catch (error) {
        console.log("DB error")
    }
};
main();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});