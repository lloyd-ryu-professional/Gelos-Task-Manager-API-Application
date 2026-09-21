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

router.get("/", auth, authorizeRole(1, 2), GetAllUsers);

router.get("/search", auth, authorizeRole(2, 2), GetUser);

router.get("/:id", auth, authorizeRole(2, 2), GetUsersID);

router.post("/", auth, authorizeRole(2, 2), CreateUser);

router.put("/:id", auth, authorizeRole(2, 2), UpdateUser);

router.patch("/:id", auth, authorizeRole(2, 2), UpdateAllUser);

router.delete("/:id", auth, authorizeRole(2, 2), DeleteUser);

export default router;