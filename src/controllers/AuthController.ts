import "dotenv/config";
import express from "express";
import { User } from "@prisma/client";
import { prismaConfig } from "../../prisma/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const Login = async (req: express.Request, res: express.Response) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password is required" });
    }

    try {
        const user: User | null = await prismaConfig.user.findUnique({
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

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "Server misconfiguration" });
        }

        // FIXED: Use "role" instead of "roleId"
        const payload = {
            id: user.UserID,
            role: user.UserRoleID
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                id: user.UserID,
                username: user.UserName,
                role: user.UserRoleID
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const Logout = async (req: express.Request, res: express.Response) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ message: "No token provided" });
    }
    res.status(200).json({ message: "Logout Successful" });
};