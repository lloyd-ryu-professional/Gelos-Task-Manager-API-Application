import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {
    GetUserRoles,
    GetUserRoleName,
    GetUserRoleID,
    CreateUserRole,
    UpdateUserRole,
    DeleteUserRole,
}
    from '../controllers/UserRoleController'

const router = Router();

/**
 * @swagger
 * /user-roles:
 *   get:
 *     summary: Get all user roles
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Returns a list of all user roles.
 *     responses:
 *       200:
 *         description: Successfully retrieved all user roles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserRole'
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching user roles.
 */

router.get("/", auth, authorizeRole(1, 2), GetUserRoles);

/**
 * @swagger
 * /user-roles/search:
 *   get:
 *     summary: Search user roles by name
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Performs a partial match search on UserRoleName.
 *     parameters:
 *       - in: query
 *         name: UserRoleName
 *         required: true
 *         schema:
 *           type: string
 *         description: The role name (or partial name) to search for.
 *     responses:
 *       200:
 *         description: Successfully retrieved matching user roles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserRole'
 *       400:
 *         description: Missing or invalid UserRoleName query parameter.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while searching user roles.
 */

router.get("/search", auth, authorizeRole(2, 2), GetUserRoleName);

/**
 * @swagger
 * /user-roles/{id}:
 *   get:
 *     summary: Get a user role by ID
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Retrieves a single user role using its UserRoleID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserRoleID of the user role.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserRole'
 *       404:
 *         description: User role not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching user role.
 */

router.get("/:id", auth, authorizeRole(2, 2), GetUserRoleID);

/**
 * @swagger
 * /user-roles:
 *   post:
 *     summary: Create a new user role
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new user role and optionally connects users to it.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserRoleID:
 *                 type: integer
 *               UserRoleName:
 *                 type: string
 *               User:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     UserID:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Successfully created user role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserRole'
 *       409:
 *         description: Duplicate UserRoleName (Prisma P2002).
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.post("/", auth, authorizeRole(2, 2), CreateUserRole);
/**
 * @swagger
 * /user-roles/{id}:
 *   put:
 *     summary: Update a user role
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Updates the UserRoleName of an existing user role.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserRoleID of the user role to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserRoleName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated user role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserRole'
 *       404:
 *         description: User role not found.
 *       409:
 *         description: Duplicate UserRoleName or record not found (Prisma P2002 / P2025).
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.put("/:id", auth, authorizeRole(2, 2), UpdateUserRole);

/**
 * @swagger
 * /user-roles/{id}:
 *   delete:
 *     summary: Delete a user role
 *     tags: [UserRole]
 *     security:
 *       - BearerAuth: []
 *     description: Deletes a user role by its UserRoleID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserRoleID of the user role to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted user role.
 *       404:
 *         description: User role not found.
 *       400:
 *         description: Error deleting user role.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.delete("/:id", auth, authorizeRole(2, 2), DeleteUserRole);

export default router;