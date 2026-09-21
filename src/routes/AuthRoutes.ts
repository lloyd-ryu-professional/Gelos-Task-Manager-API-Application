import "dotenv/config";
import express from "express";
import {Router} from "express";
import {User} from "@prisma/client";
import {prismaConfig} from "../../prisma/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {Login, Logout} from "../controllers/AuthController"

const router = Router();

router.post("/login", Login)

router.post("/logout", Logout)

export default router;
