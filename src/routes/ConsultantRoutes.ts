import {Router} from "express";
import {auth} from "../middleware/auth"
import {authorizeRole} from "../middleware/roleAuth"
import {
    GetAllConsultants,
    GetConsultant,
    GetConsultantID,
    CreateConsultant,
    UpdateConsultant,
    UpdateAllConsultant,
    DeleteConsultant,
}
    from '../controllers/ConsultantController'

const router = Router();

/**
 * @swagger
 * /consultants:
 *   get:
 *     summary: Get all consultants
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Returns a list of all consultants.
 *     responses:
 *       200:
 *         description: Successfully retrieved all consultants.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Consultant'
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching consultants.
 */

router.get("/", auth, authorizeRole(1, 2), GetAllConsultants);

/**
 * @swagger
 * /consultants/search:
 *   get:
 *     summary: Search consultants by name
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: >
 *       Searches consultants by first name, last name, or full name.
 *       - If one word is provided, searches both first and last name.
 *       - If multiple words are provided, treats the first word as first name and the rest as last name.
 *     parameters:
 *       - in: query
 *         name: ConsultantName
 *         required: true
 *         schema:
 *           type: string
 *         description: The consultant name or partial name to search for.
 *     responses:
 *       200:
 *         description: Successfully retrieved matching consultants.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Consultant'
 *       400:
 *         description: Missing or invalid ConsultantName query parameter.
 *       404:
 *         description: No consultants found matching the search criteria.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while searching consultants.
 */

router.get("/search", auth, authorizeRole(2, 2), GetConsultant);

/**
 * @swagger
 * /consultants/{id}:
 *   get:
 *     summary: Get a consultant by ID
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Retrieves a single consultant using its ConsultantID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ConsultantID of the consultant.
 *     responses:
 *       200:
 *         description: Successfully retrieved the consultant.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultant'
 *       404:
 *         description: Consultant not found.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Server error while fetching consultant.
 */

router.get("/:id", auth, authorizeRole(2, 2), GetConsultantID);

/**
 * @swagger
 * /consultants:
 *   post:
 *     summary: Create a new consultant
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new consultant and optionally connects tasks to them.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ConsultantID:
 *                 type: integer
 *               ConsultantFirstName:
 *                 type: string
 *               ConsultantLastName:
 *                 type: string
 *               ConsultantRole:
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
 *         description: Successfully created consultant.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultant'
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.post("/", auth, authorizeRole(2, 2), CreateConsultant);

/**
 * @swagger
 * /consultants/{id}:
 *   put:
 *     summary: Update all consultant fields
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Fully updates a consultant's first name, last name, and role.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ConsultantID of the consultant to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ConsultantFirstName:
 *                 type: string
 *               ConsultantLastName:
 *                 type: string
 *               ConsultantRole:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated consultant.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultant'
 *       404:
 *         description: Consultant not found.
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.put("/:id", auth, authorizeRole(2, 2), UpdateAllConsultant);

/**
 * @swagger
 * /consultants/{id}:
 *   patch:
 *     summary: Partially update consultant fields
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Updates one or more consultant fields (first name, last name, or role).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ConsultantID of the consultant to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ConsultantFirstName:
 *                 type: string
 *               ConsultantLastName:
 *                 type: string
 *               ConsultantRole:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated consultant.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultant'
 *       404:
 *         description: Consultant not found.
 *       400:
 *         description: Prisma validation or constraint error.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 *       500:
 *         description: Internal server error.
 */

router.patch("/:id", auth, authorizeRole(2, 2), UpdateConsultant);

/**
 * @swagger
 * /consultants/{id}:
 *   delete:
 *     summary: Delete a consultant
 *     tags: [Consultant]
 *     security:
 *       - BearerAuth: []
 *     description: Deletes a consultant by its ConsultantID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ConsultantID of the consultant to delete.
 *     responses:
 *       200:
 *         description: Successfully deleted consultant.
 *       404:
 *         description: Consultant not found.
 *       400:
 *         description: Error deleting consultant.
 *       401:
 *         description: Unauthorized - missing or invalid token.
 *       403:
 *         description: Forbidden - user does not have required role.
 */

router.delete("/:id", auth, authorizeRole(2, 2), DeleteConsultant);

export default router;