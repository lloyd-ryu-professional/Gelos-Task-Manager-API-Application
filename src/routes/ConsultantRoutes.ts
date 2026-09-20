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

router.get("/", auth, authorizeRole(1, 2), GetAllConsultants);

router.get("/search", auth, authorizeRole(2, 2), GetConsultant);

router.get("/:id", auth, authorizeRole(2, 2), GetConsultantID);

router.post("/", auth, authorizeRole(2, 2), CreateConsultant);

router.put("/:id", auth, authorizeRole(2, 2), UpdateAllConsultant);

router.patch("/:id", auth, authorizeRole(2, 2), UpdateConsultant);

router.delete("/:id", auth, authorizeRole(2, 2), DeleteConsultant);

export default router;