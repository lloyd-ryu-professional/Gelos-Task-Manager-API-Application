import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Gelos Task Manager API",
            version: "1.0.0",
            description: "API documentation for the Gelos Task Manager built with Express + Prisma",
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Local development server",
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Consultant: {
                    type: "object",
                    properties: {
                        ConsultantID: { type: "integer" },
                        ConsultantFirstName: { type: "string" },
                        ConsultantLastName: { type: "string" },
                        ConsultantRole: { type: "string" },
                    },
                },
                TaskPriority: {
                    type: "object",
                    properties: {
                        PriorityID: { type: "integer" },
                        PriorityTitle: { type: "string" },
                    },
                },
                UserRole: {
                    type: "object",
                    properties: {
                        UserRoleID: { type: "integer" },
                        UserRoleName: { type: "string" },
                    },
                },
                User: {
                    type: "object",
                    properties: {
                        UserID: { type: "integer" },
                        Email: { type: "string" },
                        UserName: { type: "string" },
                        UserFirstName: { type: "string" },
                        UserLastName: { type: "string" },
                        UserRoleID: { type: "integer" },
                    },
                },
                Task: {
                    type: "object",
                    properties: {
                        TaskID: { type: "integer" },
                        UserID: { type: "integer" },
                        TaskName: { type: "string" },
                        DueDate: { type: "string", format: "date-time" },
                        PriorityID: { type: "integer" },
                        ConsultantID: { type: "integer", nullable: true },
                        IsCompleted: { type: "boolean" },
                    },
                },
            },
        },
        security: [
            {
                BearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerConfig = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger documentation available at /api-docs");
};
