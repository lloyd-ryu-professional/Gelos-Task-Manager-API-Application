import sqlite3 from "better-sqlite3";
import {PrismaClient} from "@prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";
import "dotenv/config";
import {prisma} from "./prisma.js";

const consultantData: string[] = [
    "Accounts Clerk (Payable)|Alice Johnson",
    "Accounts Clerk (Receivable)|Bob Johnson",
    "Accounts Manager|Carla Johnson",
    "Accounts Officer|David Johnson",
    "Accounts Team Leader|Emma Johnson",
    "Administration Assistant|Frank Johnson",
    "Administration Manager|Grace Johnson",
    "Administration Supervisor|Hank Johnson",
    "Brand Coordinator|Ivy Johnson",
    "Brand Manager|Jack Johnson",
    "Business Development Manager|Kelly Johnson",
    "Call Centre Manager|Liam Johnson",
    "Call Centre Operator|Mia Johnson",
    "Chief Data Officer|Noah Johnson",
    "Chief Executive Officer|Olivia Johnson",
    "Chief Technical Officer|Paul Johnson",
    "Chief of Operations|Quinn Johnson",
    "Client Partnerships Lead|Rachel Johnson",
    "Complaint Resolution Team Leader|Sam Johnson",
    "Corporate Social Responsibility Manager|Tina Johnson",
    "Customer Accounts Manager|Uma Johnson",
    "Customer Experience Administrator|Vince Johnson",
    "Customer Experience Data Manager|Wendy Johnson",
    "Customer Experience Manager|Xavier Johnson",
    "Customer Insight Coordinator|Yara Johnson",
    "Customer Service Officer|Zane Johnson",
    "Cyber Security Engineer|Abby Jones",
    "Database Development Team Leader|Ben Jones",
    "Digital Media Coordinator|Clara Jones",
    "Employee Relations Advisor|Derek Jones",
    "Employee Relations Officer|Ella Jones",
    "Employee Relations Team Lead|Felix Jones",
    "Employee Services Manager|Gina Jones",
    "Employee Social Planner|Harry Jones",
    "Engineering Consultant|Iris Jones",
    "Financial Controller|Jake Jones",
    "Finance Officer|Kara Jones",
    "Financial Planner|Leo Jones",
    "Head of Customer Service|Maya Jones",
    "Head of Finance|Nate Jones",
    "Head of Marketing|Opal Jones",
    "Human Resources Advisor|Pete Jones",
    "Human Resources Analyst|Quinn Jones",
    "Human Resources Consultant|Ruby Jones",
    "Human Resources Coordinator|Sean Jones",
    "Human Resources Director|Tara Jones",
    "Human Resources Information Systems Administrator|Ulysses Jones",
    "Internal Audit Officer|Violet Jones",
    "Internal Relations Team Lead|Will Jones",
    "ICT Consultant|Xena Jones",
    "ICT Services Senior Manager|Yuri Jones",
    "ICT Support Senior Manager|Zoe Jones",
    "ICT Network Senior Manager|Anna Brown",
    "ICT Security Senior Manager|Bill Brown",
    "Marketing and Communications Manager|Cara Brown",
    "Marketing and Research Analyst|Dean Brown",
    "Marketing and Research Coordinator|Eva Brown",
    "Marketing Assistant|Finn Brown",
    "Marketing Consultant|Gwen Brown",
    "Marketing Coordinator|Hank Brown",
    "Marketing Manager|Ivy Brown",
    "Media Coordinator|Jake Brown",
    "Media Planning Coordinator|Kara Brown",
    "Organisational Development Coordinator|Liam Brown",
    "Payroll Manager|Mia Brown",
    "Payroll Officer|Noah Brown",
    "Portfolio Team Leader|Olivia Brown",
    "Procurement Manager|Paul Brown",
    "Procurement Officer|Quinn Brown",
    "Product Development Coordinator|Rachel Brown",
    "Public Relations Lead|Sam Brown",
    "Quality Assurance Officer|Tina Brown",
    "Reception Manager|Uma Brown",
    "Receptionist|Vince Brown",
    "Recruitment Advisor|Wendy Brown",
    "Recruitment Coordinator|Xavier Brown",
    "Recruitment, Selection and Onboarding Administrator|Yara Brown",
    "Research Officer|Zane Brown",
    "Return To Work Coordinator|Abby Smith",
    "Salary Administrator|Ben Smith",
    "Service Desk Officer Level 1|Clara Smith",
    "Social Media Lead|Derek Smith",
    "Strategic Analyst|Ella Smith",
    "Strategic Planning Manager|Felix Smith",
    "Software Development Team Leader|Gina Smith",
    "Security Administrator|Harry Smith",
    "Security Manager|Iris Smith",
    "Sustainability Officer|Jake Smith",
    "Talent Acquisition Manager|Kara Smith",
    "Telecommunication Technician|Leo Smith",
    "Telecommunications Senior Manager|Maya Smith",
    "Technical Support Officer Level 2|Nate Smith",
    "Technical Support Specialist Level 3|Opal Smith",
    "Taxation Manager|Pete Smith",
    "Taxation Officer|Quinn Smith",
    "Training Advisor|Ruby Smith",
    "Training and Development Administrator|Sean Smith",
    "Training and Development Manager|Tara Smith",
    "Web Development Team Leader|Ulysses Smith",
    "Work Health and Safety Administrator|Violet Smith",
    "Work Health and Safety Coordinator|Will Smith",
    "Work Health and Safety Manager|Xena Smith",
    "Work Health and Safety Officer|Yuri Smith"
];

const consultantsConversion = consultantData.map((entry) => {
    const [role, fullName] = entry.split("|");
    const [firstName, lastName] = fullName.trim().split(" ");

    return {
        ConsultantRole: role.trim(),
        ConsultantFirstName: firstName.trim(),
        ConsultantLastName: lastName.trim(),
    };
});

async function consultantSeed() {
    await prisma.consultant.createMany({
        data: consultantsConversion,
    });
}

async function taskPrioritySeed() {
    await prisma.taskPriority.createMany({
        data: [
            {PriorityID: 1, PriorityTitle: "Low"},
            {PriorityID: 2, PriorityTitle: "Medium"},
            {PriorityID: 3, PriorityTitle: "High"},
        ],
    });
}

async function userRoleSeed() {
    await prisma.userRole.createMany({
        data: [
            {UserRoleID: 1, UserRoleName: "User"},
            {UserRoleID: 2, UserRoleName: "Admin"},
        ],
    });
}

async function userSeed() {
    await prisma.user.createMany({
        data: [
            {
                UserID: 1,
                UserName: "kesterjester",
                UserFirstName: "Jester",
                UserLastName: "User",
                Email: "user@test.com",
                Password: "password123",
                UserRoleID: 1,
            },
            {
                UserID: 2,
                UserName: "adamadam",
                UserFirstName: "Adam",
                UserLastName: "Admin",
                Email: "admin@test.com",
                Password: "password456",
                UserRoleID: 2,
            },
        ],
    });
}

async function taskSeed() {
    await prisma.task.createMany({
        data: [
            {TaskID: 1, UserID: 1, TaskName: "task 1", DueDate: new Date("2026-9-5"), PriorityID: 1, ConsultantID: 1, IsCompleted: false},
            {TaskID: 2, UserID: 1, TaskName: "task 2", DueDate: new Date("2026-9-5"), PriorityID: 1, ConsultantID: 1, IsCompleted: false},
            {TaskID: 3, UserID: 1, TaskName: "task 3", DueDate: new Date("2026-9-5"), PriorityID: 1, ConsultantID: 1, IsCompleted: false},
        ]
    })
}

async function main() {
    await prisma.task.deleteMany({});
    await prisma.consultant.deleteMany({});
    await prisma.taskPriority.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.userRole.deleteMany({});

    await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='Task';`);
    await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='Consultant';`);
    await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='TaskPriority';`);
    await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='User';`);
    await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='UserRole';`);

    console.log("Deleted seed data and reset autoincrement");

    await consultantSeed();
    await userRoleSeed();
    await taskPrioritySeed();
    await userSeed();
    await taskSeed();

    console.log("All seeds completed.");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => prisma.$disconnect());