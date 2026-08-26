import "dotenv/config";
import express from "express";
import {Router} from "express";
import {prisma} from "../../prisma/prisma"

const router = Router();

router.get("/", async (req: express.Request, res: express.Response) => {
    try {
        const TaskPriority = await prisma.taskPriority.findMany();
        res.status(200).json(TaskPriority);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }
});

router.get("/search", async (req: express.Request, res: express.Response) => {
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

router.get("/:id", async (req: express.Request, res: express.Response) => {
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


router.post("/", async (req: express.Request, res: express.Response) => {
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

router.put("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const {PriorityTitle, Task} = req.body;

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

router.delete("/:id", async (req: express.Request, res: express.Response) => {
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