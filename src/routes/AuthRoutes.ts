import "dotenv/config";
import express from "express";
import {Router} from "express";
import {User} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {Login, Logout} from "../controllers/AuthController"

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     description: Authenticates a user using username and password, returning a JWT token and basic user info.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Login successful. Returns JWT token and user details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login Successful
 *                 token:
 *                   type: string
 *                   description: JWT token valid for 2 hours.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     username:
 *                       type: string
 *                     role:
 *                       type: integer
 *       400:
 *         description: Missing username or password.
 *       401:
 *         description: Invalid username or password.
 *       500:
 *         description: Server error or missing JWT secret.
 */

router.post("/login", Login)

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: User logout
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     description: Logs out a user by validating the provided JWT token. No token is invalidated server-side; this endpoint simply confirms logout.
 *     responses:
 *       200:
 *         description: Logout successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logout Successful
 *       400:
 *         description: No token provided.
 *       401:
 *         description: Invalid or missing Bearer token.
 */

router.post("/logout", Logout)

export default router;
