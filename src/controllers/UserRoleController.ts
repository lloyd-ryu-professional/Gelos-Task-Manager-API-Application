import "dotenv/config";
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"

export const GetUserRoles = async (req: any, res: any) => {
    try {
        const UserRole = await prismaConfig.userRole.findMany();
        res.status(200).json(UserRole);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }
};

export const GetUserRoleName = async (req: any, res: any) => {
    try {
        const {UserRoleName} = req.query;

        const searchQuery = typeof UserRoleName === "string" ? UserRoleName : '';

        /* string validation for priority title */
        if (!UserRoleName || typeof UserRoleName !== "string") {
            res.status(400).json({message: "A valid UserRoleName query parameter is required."});
            return;
        }

        const UserRoleNames = await prismaConfig.userRole.findMany({
            where: {
                UserRoleName: {
                    contains: searchQuery,
                },
            },
        });
        res.status(200).json(UserRoleNames);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching User roles search: ${error.message}`})
    }
};


export const GetUserRoleID = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const UserRoleNames = await prismaConfig.userRole.findUnique({
            where: {
                UserRoleID: Number(id)
            },
        });

        if (!UserRoleNames) {
            res.status(404).json({message: "User role not found"});
            return;
        }
        res.status(200).json(UserRoleNames);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching user role: ${error.message}`})
    }
};

export const CreateUserRole = async (req: any, res: any) => {
    try {
        const {UserRoleID, UserRoleName, User} = req.body;
        const newUserRole = await prismaConfig.userRole.create({
            data: {
                UserRoleID,
                UserRoleName: UserRoleName,
                User: {
                    connect: User
                }
            },
        });
        res.status(200).json(newUserRole);
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

export const UpdateUserRole = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const {UserRoleName} = req.body;

        const updatedUserRole = await prismaConfig.userRole.update({
            where: {
                UserRoleID: Number(id),
            },
            data: {
                UserRoleName: UserRoleName,
            },
        });
        if (!updatedUserRole) {
            return res.status(404).json({message: "User role not found"})
        }
        res.status(200).json(updatedUserRole);
    } catch (error: any) {
        // res.status(400).json({message: `Error updating task priority: ${error.message}`})
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(409).json({
                    message: `A task priority with the title '${req.body.UserRoleName}' already exists.`
                });
            }
            if (error.code === 'P2025') {
                return res.status(409).json({
                    message: `No record was found for  '${req.body.UserRoleName}' to update.`
                })
            }
        }
    }
};

export const DeleteUserRole = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const deletedUserRole = await prismaConfig.userRole.delete({
            where: {
                UserRoleID: Number(id),
            },
        });
        if (!deletedUserRole) {
            return res.status(404).json({message: "User role not found."})
        }
        res.status(200).json({message: "Deleted user role"});
    } catch
        (error: any) {
        res.status(400).json({message: `Error delete user role: ${error.message}`})
    }
}