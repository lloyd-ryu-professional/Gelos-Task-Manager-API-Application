import "dotenv/config";
import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"

const router = Router();

// router.get("/", auth, authorizeRole("User", "Admin"), async (req: express.Request, res: express.Response) => {

router.get("/", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const TaskPriority = await prismaConfig.taskPriority.findMany();
        res.status(200).json(TaskPriority);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }
});

router.get("/search", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const {PriorityTitle} = req.query;

        const searchQuery = typeof PriorityTitle === "string" ? PriorityTitle : '';

        /* string validation for priority title */
        if (!PriorityTitle || typeof PriorityTitle !== "string") {
            res.status(400).json({message: "A valid PriorityTitle query parameter is required."});
            return;
        }

        const TaskPriorities = await prismaConfig.taskPriority.findMany({
            where: {
                PriorityTitle: {
                    contains: searchQuery,
                },
            },
        });
        res.status(200).json(TaskPriorities);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities search: ${error.message}`})
    }
})

router.get("/:id", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const {id} = req.params;
        const taskPriorities = await prismaConfig.taskPriority.findUnique({
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
})
router.post("/", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const {PriorityID, PriorityTitle, Task} = req.body;
        const newTaskPriority = await prismaConfig.taskPriority.create({
            data: {
                PriorityID,
                PriorityTitle: PriorityTitle,
                Task: Task,
            },
        });
        res.status(200).json(newTaskPriority);
    } catch (error: any) {

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(409).json({
                    message: `A task priority with the title '${req.body.PriorityTitle}' already exists.`
                });
            }
        }
        // Fallback for other errors
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
    // res.status(400).json({message: `Error creating task priority: ${error.message}`})
})

router.put("/:id", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const {id} = req.params;
        const {PriorityTitle} = req.body;

        const updatedTaskPriority = await prismaConfig.taskPriority.update({
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
        // res.status(400).json({message: `Error updating task priority: ${error.message}`})
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(409).json({
                    message: `A task priority with the title '${req.body.PriorityTitle}' already exists.`
                });
            }
            if (error.code === 'P2025') {
                return res.status(409).json({
                    message: `No record was found for  '${req.body.PriorityTitle}' to update.`
                })
            }
        }
    }
})

router.delete("/:id", auth, authorizeRole(1, 2), async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTaskPriority = await prismaConfig.taskPriority.delete({
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