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

router.get("/", auth, authorizeRole(1, 2), GetTaskPriorities);

router.get("/search", auth, authorizeRole(2, 2), GetTaskPriorityTitle);

router.get("/:id", auth, authorizeRole(2, 2), GetTaskPriorityID);

router.post("/", auth, authorizeRole(2, 2), CreateTaskPriority);

router.put("/:id", auth, authorizeRole(2, 2), UpdateTaskPriority);

router.delete("/:id", auth, authorizeRole(2, 2), DeleteTaskPriority);

export default router;