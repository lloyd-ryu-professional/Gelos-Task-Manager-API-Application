import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {
    GetTaskPriorities,
    GetTaskPriorityTitle,
    GetTaskPriorityID,
    CreateTaskPriority,
    UpdateTaskPriority,
    DeleteTaskPriority
}
    from '../controllers/TaskPriorityController'

const router = Router();

/**
 * @swagger
 * /task-priorities:
 *   get:
 *     summary: Get all task priorities
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Returns a list of all task priorities.
 *     responses:
 *       200:
 *         description: Successfully retrieved all task priorities.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TaskPriority'
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching task priorities.
 */

router.get("/", auth, authorizeRole(1, 2), GetTaskPriorities);

/**
 * @swagger
 * /task-priorities/search:
 *   get:
 *     summary: Search task priorities by title
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Performs a partial match search on PriorityTitle.
 *     parameters:
 *       - in: query
 *         name: PriorityTitle
 *         required: true
 *         schema:
 *           type: string
 *         description: The title (or partial title) to search for.
 *     responses:
 *       200:
 *         description: Successfully retrieved matching task priorities.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TaskPriority'
 *       400:
 *         description: Missing or invalid PriorityTitle query parameter.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while searching task priorities.
 */

router.get("/search", auth, authorizeRole(2, 2), GetTaskPriorityTitle);

/**
 * @swagger
 * /task-priorities/{id}:
 *   get:
 *     summary: Get a task priority by ID
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Retrieves a single task priority using its PriorityID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The PriorityID of the task priority.
 *     responses:
 *       200:
 *         description: Successfully retrieved the task priority.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskPriority'
 *       404:
 *         description: Task priority not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching task priority.
 */

router.get("/:id", auth, authorizeRole(2, 2), GetTaskPriorityID);

/**
 * @swagger
 * /task-priorities:
 *   post:
 *     summary: Create a new task priority
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new task priority and optionally connects tasks.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PriorityID:
 *                 type: integer
 *               PriorityTitle:
 *                 type: string
 *               Task:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     TaskID:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Successfully created task priority.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskPriority'
 *       409:
 *         description: Duplicate PriorityTitle (Prisma P2002).
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.post("/", auth, authorizeRole(2, 2), CreateTaskPriority);

/**
 * @swagger
 * /task-priorities/{id}:
 *   put:
 *     summary: Update a task priority
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Updates the PriorityTitle of an existing task priority.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The PriorityID of the task priority to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PriorityTitle:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated task priority.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskPriority'
 *       404:
 *         description: Task priority not found.
 *       409:
 *         description: Duplicate PriorityTitle or record not found (Prisma P2002 / P2025).
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.put("/:id", auth, authorizeRole(2, 2), UpdateTaskPriority);

/**
 * @swagger
 * /task-priorities/{id}:
 *   delete:
 *     summary: Delete a task priority
 *     tags: [TaskPriority]
 *     security:
 *       - BearerAuth: []
 *     description: Deletes a task priority by its PriorityID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The PriorityID of the task priority to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted task priority.
 *       404:
 *         description: Task priority not found.
 *       400:
 *         description: Error deleting task priority.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.delete("/:id", auth, authorizeRole(2, 2), DeleteTaskPriority);

export default router;