import "dotenv/config";
import {Prisma} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma"

export const GetAllConsultants = async (req: any, res: any) => {
    try {
        const Consultant = await prismaConfig.consultant.findMany();
        res.status(200).json(Consultant);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching task priorities: ${error.message}`})
    }
};

export const GetConsultant = async (req: any, res: any) => {
    try {
        const {ConsultantName} = req.query;

        if (!ConsultantName || typeof ConsultantName !== "string") {
            res.status(400).json({message: "A valid PriorityTitle query parameter is required."});
            return;
        }

        const searchQuery = ConsultantName.trim();
        const parts = searchQuery.split(" ").filter(Boolean);

        let whereClause: any = {};

        /* Checks if the user only entered first and last name not a full name */
        if (parts.length === 1) {
            whereClause = {
                OR: [
                    {
                        ConsultantFirstName: {
                            contains: parts[0],
                        }
                    },
                    {
                        ConsultantLastName: {
                            contains: parts[0],
                        }
                    }
                ]
            };
        } else {
            const firstName = parts[0];
            const lastName = parts.slice(1).join(" ");

            /* Checks if the user entered a full name */
            whereClause = {
                AND: [
                    {
                        ConsultantFirstName: {
                            contains: firstName,
                        }
                    },
                    {
                        ConsultantLastName: {
                            contains: lastName,
                        }
                    }
                ]
            };
        }

        const Consultants = await prismaConfig.consultant.findMany(
            {
                where: whereClause
            });

        if (Consultants.length === 0) {
            res.status(404).json({
                message: `No consultants found matching the name "${searchQuery}".`
            });
            return;
        }

        res.status(200).json(Consultants);
    } catch (error: any) {
        res.status(500).json({message: `Error fetching consultant search: ${error.message}`})
    }
};

export const GetConsultantID = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const Consultants = await prismaConfig.consultant.findUnique({
            where: {
                ConsultantID: Number(id)
            },
        });

        if (!Consultants) {
            res.status(404).json({message: "Consultant not found"});
            return;
        }
        res.status(200).json(Consultants);

    } catch (error: any) {
        res.status(500).json({message: `Error fetching Consultant: ${error.message}`})
    }
};

export const CreateConsultant = async (req: any, res: any) => {
    try {
        const {ConsultantID, ConsultantFirstName, ConsultantLastName, ConsultantRole, Task} = req.body;
        const newConsultant = await prismaConfig.consultant.create({
            data: {
                ConsultantID: ConsultantID,
                ConsultantFirstName: ConsultantFirstName,
                ConsultantLastName: ConsultantLastName,
                ConsultantRole: ConsultantRole,
                Task: {
                    connect: Task
                }
            },
        });
        res.status(200).json(newConsultant);

    } catch (error: any) {

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error creating consultant: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const UpdateAllConsultant = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const {ConsultantFirstName, ConsultantLastName, ConsultantRole} = req.body;

        const updateAllConsultant = await prismaConfig.consultant.update({
            where: {
                ConsultantID: Number(id),
            },
            data: {
                ConsultantFirstName: ConsultantFirstName,
                ConsultantLastName: ConsultantLastName,
                ConsultantRole: ConsultantRole,
            },
        });
        if (!updateAllConsultant) {
            return res.status(404).json({message: "Consultant not found"})
        }
        res.status(200).json(updateAllConsultant);
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error updating consultant: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const UpdateConsultant = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const {ConsultantFirstName, ConsultantLastName, ConsultantRole} = req.body;

        const updateConsultant = await prismaConfig.consultant.update({
            where: {
                ConsultantID: Number(id),
            },
            data: {
                ConsultantFirstName: ConsultantFirstName,
                ConsultantLastName: ConsultantLastName,
                ConsultantRole: ConsultantRole,
            },
        });
        if (!updateConsultant) {
            return res.status(404).json({message: "Consultant not found"})
        }
        res.status(200).json(updateConsultant);
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: `Error updating consultant: ${error.message}`})
        }
        return res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const DeleteConsultant = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const deletedConsultant = await prismaConfig.consultant.delete({
            where: {
                ConsultantID: Number(id),
            },
        });
        if (!deletedConsultant) {
            return res.status(404).json({message: "Consultant not found."})
        }
        res.status(200).json({message: "Deleted consultant"});
    } catch
        (error: any) {
        res.status(400).json({message: `Error delete consultant: ${error.message}`})
    }
};
