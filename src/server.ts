import express from 'express';
import sqlite3 from 'better-sqlite3';
import taskPriorityRoutes from "./routes/Task-PriorityRouter"
import authRoutes from "./routes/authRoutes"
const app = express();

app.use(express.json());

const PORT: number = Number(process.env.PORT) || 5000;

app.get("/health", (req: express.Request, res: express.Response): void => {
    res.status(200).send("OK");
})

app.get("/", (req: express.Request, res: express.Response): void => {
    res.send("Gelos Task Manager API is running")
})

app.use("/task-priorities", taskPriorityRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () : void => {
    console.log(`Server started on port ${PORT}`);
})