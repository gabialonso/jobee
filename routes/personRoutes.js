import { Router } from "express";
import {
    createPersonHandler,
    getPersonHandler,
    listPersonsByUserHandler,
    updatePersonHandler,
    deletePersonHandler,
} from "../src/controllers/personController.js";
import { authGuard } from "../middlewares/auth.js"; 

const router = Router();

router.post("/",             createPersonHandler);
router.get("/person/:userId",  listPersonsByUserHandler);
router.get("/:userId",           getPersonHandler);
router.put("/:userId",           updatePersonHandler);
router.patch("/:userId",         updatePersonHandler);
router.delete("/:userId",        deletePersonHandler);

export default router;
