import "dotenv/config";
import express from "express";
import {Router} from "express";
import {prisma} from "../../prisma/prisma"
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"

const router = Router();

router.get("/", auth, authorizeRole("User", "Admin"), async ( res: express.Response) => {
    try {
        const TaskPriority = await prisma.taskPriority.findMany();
        res.status(200).json(TaskPriority);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }
});

router.get("/search",auth, authorizeRole("User", "Admin"), async (req: express.Request, res: express.Response) => {
    try {
        const {PriorityTitle} = req.query;

        /* string validation for priority title */
        if (!PriorityTitle || typeof PriorityTitle !== "string") {
            res.status(400).json({message: "A valid PriorityTitle query parameter is required."});
            return;
        }

        const TaskPriorities = await prisma.taskPriority.findMany({
            where: {
                PriorityTitle: {
                    contains: PriorityTitle,
                },
            },
        });
        res.status(200).json(TaskPriorities);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities search: ${error.message}`})
    }
})

router.get("/:id", auth, authorizeRole("User", "Admin"),async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const taskPriorities = await prisma.taskPriority.findUnique({
            where: {
                PriorityID: Number(id)
            },
        });

        if (!taskPriorities) {
            res.status(404).json({message: "Task priority not found"});
            return;
        }
        res.status(200).json(taskPriorities);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priority: ${error.message}`})
    }
});


router.post("/", auth, authorizeRole("User", "Admin"), async (req: express.Request, res: express.Response) => {
    try {
        const {PriorityID, PriorityTitle, Task} = req.body;
        const newTaskPriority = await prisma.taskPriority.create({
            data: {
                PriorityID,
                PriorityTitle: PriorityTitle,
                Task: Task,
            },
        });
        res.status(200).json(newTaskPriority);
    } catch (error: any) {
        res.status(400).json({message: `Error creating task priority: ${error.message}`})
    }
})

router.put("/:id", auth, authorizeRole("User", "Admin"), async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const {PriorityTitle} = req.body;

        const updatedTaskPriority = await prisma.taskPriority.update({
            where: {
                PriorityID: Number(id),
            },
            data: {
                PriorityTitle: PriorityTitle,
            },
        });
        if (!updatedTaskPriority) {
            return res.status(404).json({message: "Task priority not found"})
        }
        res.status(200).json(updatedTaskPriority);
    } catch (error: any) {
        res.status(400).json({message: `Error updating task priority: ${error.message}`})
    }
})

router.delete("/:id", auth, authorizeRole("User", "Admin"), async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const deletedTaskPriority = await prisma.taskPriority.delete({
            where: {
                PriorityID: Number(id),
            },
        });
        if (!deletedTaskPriority) {
            return res.status(404).json({message: "Task priority not found."})
        }
        res.status(200).json({message: "Deleted task priority"});
    } catch
        (error: any) {
        res.status(400).json({message: `Error delete task priority: ${error.message}`})
    }
})

export default router;