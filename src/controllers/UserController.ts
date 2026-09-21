import "dotenv/config";
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"
import { Request, Response } from 'express';

export const GetAllUsers = async (req: Request, res: Response) => {
    try {
        const User = await prismaConfig.user.findMany({
            include: {
                UserRole: true
            },
            omit: {
                Password: true,
            },
        });
        res.status(200).json(User);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching users: ${error.message}`})
    }
};

export const GetUser = async (req: Request, res: Response) => {
    try {
        const {UserName} = req.query;

        if (!UserName || typeof UserName !== "string") {
            res.status(400).json({message: "A valid UserName query parameter is required."});
            return;
        }

        const searchQuery = UserName.trim();
        const parts = searchQuery.split(" ").filter(Boolean);

        let whereClause: any = {};

        /* Checks if the user only entered first and last name not a full name */
        if (parts.length === 1) {
            whereClause = {
                OR: [
                    {
                        UserFirstName: {
                            contains: parts[0],
                        }
                    },
                    {
                        UserLastName: {
                            contains: parts[0],
                        }
                    }

                ],
            };
        } else {
            const firstName = parts[0];
            const lastName = parts.slice(1).join(" ");

            /* Checks if the user entered a full name */
            whereClause = {
                AND: [
                    {
                        UserFirstName: {
                            contains: firstName,
                        }
                    },
                    {
                        UserLastName: {
                            contains: lastName,
                        }
                    }
                ],
            }
        }

        const Users = await prismaConfig.user.findMany(
            {
                where: whereClause,
                include: {
                    UserRole: true
                },
                omit: {
                    Password: true,
                },
            });

        if (Users.length === 0) {
            res.status(404).json({
                message: `No users found matching the name "${searchQuery}".`
            });
            return;
        }

        res.status(200).json(Users);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching user search: ${error.message}`})
    }
};

export const GetUsersID = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Users = await prismaConfig.user.findUnique({
                where: {
                    UserID: Number(id),
                },
            include: {
                UserRole: true
            },
            omit: {
                Password: true,
            },
            }
        );

        if (!Users) {
            res.status(404).json({message: "User not found"});
            return;
        }
        res.status(200).json(Users);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching User: ${error.message}`})
    }
};

export const CreateUser = async (req: Request, res: Response) => {
    try {
        const {UserID, UserName, UserFirstName, UserLastName, Email, Password, UserRoleID} = req.body;
        const newUser = await prismaConfig.user.create({
            data: {
                UserID: UserID,
                UserName: UserName,
                UserFirstName: UserFirstName,
                UserLastName: UserLastName,
                Email: Email,
                Password: Password,
                UserRole: {
                    connect: {
                        UserRoleID: UserRoleID
                    }
                },
            },
            include: {
                UserRole: true
            },
            omit: {
                Password: true,
            },
        });
        res.status(200).json(newUser);

    } catch (error: any) {

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error creating user: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const UpdateAllUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {UserID, UserName, UserFirstName, UserLastName, Email, Password, UserRoleID, Task} = req.body;
        const updateAllUser = await prismaConfig.user.update({
            where: {
              UserID: Number(id),
            },
            data: {
                UserID: UserID,
                UserName: UserName,
                UserFirstName: UserFirstName,
                UserLastName: UserLastName,
                Email: Email,
                Password: Password,
                UserRole: {
                    connect: {
                        UserRoleID: UserRoleID
                    }
                },
            },
            include: {
                UserRole: true
            },
            omit: {
                Password: true,
            },
        });
        res.status(200).json(updateAllUser);
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error updating user: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const UpdateUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {UserID, UserName, UserFirstName, UserLastName, Email, Password, UserRoleID, Task} = req.body;
        const updateUser = await prismaConfig.user.update({
            where: {
                UserID: Number(id),
            },
            data: {
                UserID: UserID,
                UserName: UserName,
                UserFirstName: UserFirstName,
                UserLastName: UserLastName,
                Email: Email,
                Password: Password,
                UserRole: {
                    connect: {
                        UserRoleID: UserRoleID
                    }
                },
            },
            include: {
                UserRole: true
            },
            omit: {
                Password: true,
            },
        });
        res.status(200).json(updateUser);
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error updating user: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export const DeleteUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deletedConsultant = await prismaConfig.user.delete({
            where: {
                UserID: Number(id),
            },
            omit: {
                Password: true,
            },
        });
        if (!deletedConsultant) {
            return res.status(404).json({message: "User not found."})
        }
        res.status(200).json({message: "Deleted user"});
    } catch
        (error: any) {
        res.status(400).json({message: `Error delete user: ${error.message}`})
    }
};
