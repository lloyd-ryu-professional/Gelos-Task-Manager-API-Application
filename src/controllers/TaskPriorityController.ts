import "dotenv/config";
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"

export const GetTaskPriorities = async (req: any, res: any) => {
    try {
        const TaskPriority = await prismaConfig.taskPriority.findMany();
        res.status(200).json(TaskPriority);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }

};
export const GetTaskPriorityTitle = async (req: any, res: any) => {
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
};


export const GetTaskPriorityID = async (req: any, res: any) => {
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
};

export const CreateTaskPriority = async (req: any, res: any) => {
    try {
        const {PriorityID, PriorityTitle, Task} = req.body;
        const newTaskPriority = await prismaConfig.taskPriority.create({
            data: {
                PriorityID,
                PriorityTitle: PriorityTitle,
                Task: {
                    connect: Task
                }
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
};

export const UpdateTaskPriority = async (req: any, res: any) => {
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
};

export const DeleteTaskPriority = async (req: any, res: any) => {
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
};

// export default router;