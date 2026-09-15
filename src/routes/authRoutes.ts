import "dotenv/config";
import express from "express";
import {Router} from "express";
import {User} from "@prisma/client"
import {prisma} from "../../prisma/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

const router = Router();


router.post("/login", async (req: express.Request, res: express.Response) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({message: "Username and password is required"});
    }
    try {

        const user: User | null = await prisma.user.findUnique({
        where: { UserName: username },
        include: {
            UserRole_User_UserRoleToUserRole: true
        }
    });

        if (!user) {
            return res.status(401).json({ message: "Invalid Username or Password" });
        }

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Username or Password" });
        }

        if(!process.env.JWT_SECRET) {
            return res.status(401).json({ message: "Server misconfiguration" });
        }
        const payload = {
            id: user.UserID,
            roleId: user.UserRoleID
            // ,
            // roleName: user.UserRole_User_UserRoleToUserRole.UserRoleName
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({
            message: "Login Successful", token,
            user: {
                id: user.UserID,
                username: user.UserName,
                roleId: user.UserRoleID
                // ,
                // roleName: user.UserRole_User_UserRoleToUserRole.UserRoleName
            }
        })

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Server error' });
    }
})

router.post("/logout", async (req: express.Request, res: express.Response) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    res.status(200).json({ message: "Logout Successful" });
})

export default router;