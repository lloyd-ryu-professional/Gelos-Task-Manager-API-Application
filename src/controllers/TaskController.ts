import "dotenv/config";
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"
import {Request, Response} from 'express';

export const GetAllTasks = async (req: Request, res: Response) => {
    try {
        const User = await prismaConfig.task.findMany({
            include: {
                TaskPriority: true,
                Consultant: true,
                User: true
            },
        });
        res.status(200).json(User)

    } catch (error: any) {
        res.status(500).json({message: `Error fetching users: ${error.message}`})
    }
}

export const GetTasksNames = async (req: Request, res: Response) => {
    try {
        const {TaskName} = req.query;

        if (!TaskName || typeof TaskName !== "string") {
            res.status(400).json({message: "A valid TaskName query parameter is required."});
            return;
        }
        const searchQuery = TaskName.trim();

        const Tasks = await prismaConfig.task.findMany({
            where: {
                TaskName: {
                    contains: searchQuery,
                },
            },
            select: {
                TaskPriority: true,
                Consultant: true,
                User: true,
                TaskID: true,
                TaskName: true
            },

        });

        if (Tasks.length === 0) {
            res.status(404).json({message: `No tasks found matching "${TaskName}".`});
            return;
        }

        res.status(200).json(Tasks);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching task search: ${error.message}`})
    }
}

export const GetTaskID = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Tasks = await prismaConfig.task.findUnique({
                where: {
                    TaskID: Number(id),
                },
                include: {
                    User: true,
                    TaskPriority: true,
                    Consultant: true,
                },
            }
        );

        if (!Tasks) {
            res.status(404).json({message: "Task not found"});
            return;
        }
        res.status(200).json(Tasks);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching task: ${error.message}`})
    }
};

export const CreateTask = async (req: Request, res: Response) => {
    try {
        const { TaskName, DueDate, PriorityID, UserID, ConsultantID } = req.body;

        /* Data validation for required fields containing the foreign keys */
        if (!TaskName || !DueDate || !PriorityID || !UserID) {
            return res.status(400).json({
                message: "TaskName, DueDate, PriorityID, and UserID are all required."
            });
        }

        const newTask = await prismaConfig.task.create({
            data: {
                TaskName: TaskName,
                DueDate: new Date(DueDate),
                IsCompleted: false,

                // Connect the mandatory relations
                User: {
                    connect: { UserID: UserID }
                },
                TaskPriority: {
                    connect: { PriorityID: PriorityID }
                },

                Consultant: ConsultantID ? {
                    connect: { ConsultantID: ConsultantID }
                } : undefined
            },
            include: {
                User: true,
                TaskPriority: true,
                Consultant: true
            }
        });

        return res.status(201).json(newTask);

    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            /* Check when UserID, PriorityID, or ConsultantID don't exist in the DB */
            if (error.code === 'P2025') {
                return res.status(400).json({
                    message: "Failed to create task. The specified User, Priority, or Consultant does not exist."
                });
            }
            res.status(400).json({message: `Error updating task: ${error.message}`})
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const UpdateAllTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const { TaskName, DueDate, PriorityID, UserID, ConsultantID } = req.body;

        /* Data validation for required fields containing the foreign keys */
        if (!TaskName || !DueDate || !PriorityID || !UserID) {
            return res.status(400).json({
                message: "TaskName, DueDate, PriorityID, and UserID are all required."
            });
        }

        const updateTask = await prismaConfig.task.update({
            where: {
                TaskID: Number(id),
            },
            data: {
                TaskName: TaskName,
                DueDate: new Date(DueDate),
                IsCompleted: false,

                // Connect the mandatory relations
                User: {
                    connect: { UserID: UserID }
                },
                TaskPriority: {
                    connect: { PriorityID: PriorityID }
                },

                Consultant: ConsultantID ? {
                    connect: { ConsultantID: ConsultantID }
                } : undefined
            },
            include: {
                User: true,
                TaskPriority: true,
                Consultant: true
            }
        });

        return res.status(201).json(updateTask);

    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            /* Check when UserID, PriorityID, or ConsultantID don't exist in the DB */
            if (error.code === 'P2025') {
                return res.status(400).json({
                    message: "Failed to create task. The specified User, Priority, or Consultant does not exist."
                });
            }
            res.status(400).json({message: `Error updating task: ${error.message}`})
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const UpdateTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const data: any = {};

        /* Only update fields if they exist in req.body */
        if (req.body.TaskName) {
            data.TaskName = req.body.TaskName;
        }
        if (req.body.DueDate) {
            data.DueDate = new Date(req.body.DueDate)
        };

        if (req.body.IsCompleted !== undefined) {
            data.IsCompleted = req.body.IsCompleted;
        }

        if (req.body.UserID) {
            data.User = {
                connect: {
                    UserID: req.body.UserID
                }
            };
        }

        if (req.body.PriorityID) {
            data.TaskPriority = {
                connect: {
                    PriorityID: req.body.PriorityID
                }
            };
        }

        if (req.body.ConsultantID) {
            data.Consultant = {
                connect: {
                ConsultantID: req.body.ConsultantID
                }
            };
        }

        const updateTask = await prismaConfig.task.update({
            where: { TaskID: Number(id) },
            data,
            include: {
                User: true,
                TaskPriority: true,
                Consultant: true
            }
        });

        return res.status(200).json(updateTask);

    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            /* Check when UserID, PriorityID, or ConsultantID don't exist in the DB */
            if (error.code === 'P2025') {
                return res.status(400).json({
                    message: "Failed to create task. The specified User, Priority, or Consultant does not exist."
                });
            }
            res.status(400).json({message: `Error updating task: ${error.message}`})
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const DeleteTask = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const deleteTask = await prismaConfig.task.delete({
            where: {
                TaskID: Number(id),
            },
            include: {
                User: true,
                TaskPriority: true,
                Consultant: true
            }
        });
        if (!deleteTask) {
            return res.status(404).json({message: "task not found."})
        }
        res.status(200).json({message: "Deleted task"});

        return res.status(201).json(deleteTask);

    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error deleting task: ${error.message}`})
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};