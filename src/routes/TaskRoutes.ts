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

router.get("/", auth, authorizeRole(1, 2), GetAllTasks);

router.get("/search", auth, authorizeRole(2, 2), GetTasksNames);

router.get("/:id", auth, authorizeRole(2, 2), GetTaskID);

router.post("/", auth, authorizeRole(2, 2), CreateTask);

router.put("/:id", auth, authorizeRole(2, 2), UpdateAllTask);

router.patch("/:id", auth, authorizeRole(2, 2), UpdateTask);

router.delete("/:id", auth, authorizeRole(2, 2), DeleteTask);

export default router;