-- CreateTable
CREATE TABLE "Consultant" (
    "ConsultantID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ConsultantFirstName" TEXT NOT NULL,
    "ConsultantLastName" TEXT NOT NULL,
    "ConsultantRole" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Task" (
    "TaskID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserID" INTEGER NOT NULL,
    "TaskName" TEXT NOT NULL,
    "DueDate" DATETIME NOT NULL,
    "PriorityID" INTEGER NOT NULL,
    "ConsultantID" INTEGER,
    "IsCompleted" BOOLEAN NOT NULL,
    CONSTRAINT "Task_ConsultantID_fkey" FOREIGN KEY ("ConsultantID") REFERENCES "Consultant" ("ConsultantID") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Task_PriorityID_fkey" FOREIGN KEY ("PriorityID") REFERENCES "TaskPriority" ("PriorityID") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "Task_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "TaskPriority" (
    "PriorityID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "PriorityTitle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Email" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "UserFirstName" TEXT NOT NULL,
    "UserLastName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "UserRoleID" INTEGER NOT NULL,
    CONSTRAINT "User_UserRoleID_fkey" FOREIGN KEY ("UserRoleID") REFERENCES "UserRole" ("UserRoleID") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "UserRole" (
    "UserRoleID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserRoleName" TEXT NOT NULL
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_TaskPriority_1" ON "TaskPriority"("PriorityTitle");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_User_1" ON "User"("UserName");
Pragma writable_schema=0;

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_UserRole_1" ON "UserRole"("UserRoleName");
Pragma writable_schema=0;
