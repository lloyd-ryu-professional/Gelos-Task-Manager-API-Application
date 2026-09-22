import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {
    GetAllTasks,
    GetTasksNames,
    GetTaskID,
    CreateTask,
    UpdateTask,
    UpdateAllTask,
    DeleteTask,
}
    from '../controllers/TaskController'

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Returns all tasks with their associated user, priority, and consultant.
 *     responses:
 *       200:
 *         description: Successfully retrieved all tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching tasks.
 */

router.get("/", auth, authorizeRole(1, 2), GetAllTasks);

/**
 * @swagger
 * /tasks/search:
 *   get:
 *     summary: Search tasks by name
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Performs a partial match search on TaskName.
 *     parameters:
 *       - in: query
 *         name: TaskName
 *         required: true
 *         schema:
 *           type: string
 *         description: The task name or partial name to search for.
 *     responses:
 *       200:
 *         description: Successfully retrieved matching tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       400:
 *         description: Missing or invalid TaskName query parameter.
 *       404:
 *         description: No tasks found matching the search criteria.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while searching tasks.
 */

router.get("/search", auth, authorizeRole(2, 2), GetTasksNames);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Retrieves a single task using its TaskID, including related user, priority, and consultant.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TaskID of the task.
 *     responses:
 *       200:
 *         description: Successfully retrieved the task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching task.
 */

router.get("/:id", auth, authorizeRole(2, 2), GetTaskID);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new task and assigns user, priority, and optionally consultant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - TaskName
 *               - DueDate
 *               - PriorityID
 *               - UserID
 *             properties:
 *               TaskName:
 *                 type: string
 *               DueDate:
 *                 type: string
 *                 format: date-time
 *               PriorityID:
 *                 type: integer
 *               UserID:
 *                 type: integer
 *               ConsultantID:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Successfully created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Missing required fields or invalid foreign keys.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.post("/", auth, authorizeRole(2, 2), CreateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update all task fields
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Fully updates a task including user, priority, and consultant relations.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TaskID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - TaskName
 *               - DueDate
 *               - PriorityID
 *               - UserID
 *             properties:
 *               TaskName:
 *                 type: string
 *               DueDate:
 *                 type: string
 *                 format: date-time
 *               PriorityID:
 *                 type: integer
 *               UserID:
 *                 type: integer
 *               ConsultantID:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Successfully updated task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Missing required fields or invalid foreign keys.
 *       404:
 *         description: Task not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.put("/:id", auth, authorizeRole(2, 2), UpdateAllTask);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Partially update task fields
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Updates one or more task fields. Only provided fields are updated.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TaskID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TaskName:
 *                 type: string
 *               DueDate:
 *                 type: string
 *                 format: date-time
 *               IsCompleted:
 *                 type: boolean
 *               UserID:
 *                 type: integer
 *               PriorityID:
 *                 type: integer
 *               ConsultantID:
 *                 type: integer
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Successfully updated task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Invalid foreign keys or Prisma constraint error.
 *       404:
 *         description: Task not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.patch("/:id", auth, authorizeRole(2, 2), UpdateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *     description: Deletes a task by its TaskID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The TaskID of the task to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted task.
 *       404:
 *         description: Task not found.
 *       400:
 *         description: Error deleting task.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.delete("/:id", auth, authorizeRole(2, 2), DeleteTask);

export default router;