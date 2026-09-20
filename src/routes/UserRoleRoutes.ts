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

router.get("/", auth, authorizeRole(1, 2), GetUserRoles);

router.get("/search", auth, authorizeRole(2, 2), GetUserRoleName);

router.get("/:id", auth, authorizeRole(2, 2), GetUserRoleID);

router.post("/", auth, authorizeRole(2, 2), CreateUserRole);

router.put("/:id", auth, authorizeRole(2, 2), UpdateUserRole);

router.delete("/:id", auth, authorizeRole(2, 2), DeleteUserRole);

export default router;