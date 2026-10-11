# Gelos-Task-Manager-API-Application

### Developed by Lloyd Ryu

## Overview
The Gelos Task Manager API is a secure, scalable backend service powering the company's digital task manager web app. It provides endpoints for viewing, creating, updating, searching, and deleting tasks. It also comes with user authentication and authorisation to serve as an intermediary to the SQLite database.

This API is designed for use exclusively by Gelos Enterprise staff through the official task manager app running on the web.

## Features

### Task Management
- Add new task
- Display tasks
- Mark tasks as complete
- Delete tasks
- Search tasks

### User Management
- Retrieve/Add/edit/delete user accounts
- Role‑based access control for User and Admin

### Consultant Records
- Retrieve/Add/edit/delete consultants
- Search consultants

## Technology Stack
- Node.js
- Express.js
- SQLite
- Prisma
- JWT Authentication

## Setup Instructions

### Clone the repository

- Open up Windows Powershall
- git clone https://github.com/lorddoctor48/Gelos-Task-Manager-API-Application
- cd Gelos-Task-Manager-API-Application

### Install dependencies and create a .env file
- Install dependencies and create a .env file
- Go back to the local repository
- npm install
- Create a .env file
- Add the following environment variables PORT=5000 DATABASE_URL="file:./Gelos-Task-Manager.db" JWT_SECRET=<"your-secret-key">

### Creating seed data
- Run the following command in the terminal npm run seed

Running the API
- Start the server by entering the following command npm run start
- The Swagger documentation is available in the terminal when running the API.
- The link to Swagger is the following: http://localhost:5000/api-docs
