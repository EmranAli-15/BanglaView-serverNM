import express, { json } from 'express';
const app = express();
import env from 'dotenv';
import cors from 'cors';
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Server is running."
    });
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});