import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {
    GetAllUsers,
    GetUser,
    GetUsersID,
    CreateUser,
    UpdateUser,
    UpdateAllUser,
    DeleteUser,
}
    from '../controllers/UserController'

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Returns all users with their associated roles. Passwords are omitted.
 *     responses:
 *       200:
 *         description: Successfully retrieved all users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching users.
 */

router.get("/", auth, authorizeRole(1, 2), GetAllUsers);

/**
 * @swagger
 * /users/search:
 *   get:
 *     summary: Search users by name
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: >
 *       Searches users by first name, last name, or full name.
 *       - If one word is provided, searches both first and last name.
 *       - If multiple words are provided, treats the first word as first name and the rest as last name.
 *     parameters:
 *       - in: query
 *         name: UserName
 *         required: true
 *         schema:
 *           type: string
 *         description: The user name or partial name to search for.
 *     responses:
 *       200:
 *         description: Successfully retrieved matching users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Missing or invalid UserName query parameter.
 *       404:
 *         description: No users found matching the search criteria.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while searching users.
 */

router.get("/search", auth, authorizeRole(2, 2), GetUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Retrieves a single user using its UserID. Password is omitted.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserID of the user.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching user.
 */

router.get("/:id", auth, authorizeRole(2, 2), GetUsersID);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new user and assigns a role. Password is stored but omitted from the response.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserName
 *               - UserFirstName
 *               - UserLastName
 *               - Email
 *               - Password
 *               - UserRoleID
 *             properties:
 *               UserID:
 *                 type: integer
 *               UserName:
 *                 type: string
 *               UserFirstName:
 *                 type: string
 *               UserLastName:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               UserRoleID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.post("/", auth, authorizeRole(2, 2), CreateUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update all user fields
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Fully updates a user's details including role assignment. Password is stored but omitted from the response.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserName:
 *                 type: string
 *               UserFirstName:
 *                 type: string
 *               UserLastName:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               UserRoleID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully updated user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.put("/:id", auth, authorizeRole(2, 2), UpdateUser);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Partially update user fields
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Updates one or more user fields. Password is stored but omitted from the response.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserName:
 *                 type: string
 *               UserFirstName:
 *                 type: string
 *               UserLastName:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               UserRoleID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully updated user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.patch("/:id", auth, authorizeRole(2, 2), UpdateAllUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     description: Deletes a user by its UserID. Password is omitted from the deleted record.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The UserID of the user to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted user.
 *       404:
 *         description: User not found.
 *       400:
 *         description: Error deleting user.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.delete("/:id", auth, authorizeRole(2, 2), DeleteUser);

export default router;