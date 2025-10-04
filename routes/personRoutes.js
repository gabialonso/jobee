import { Router } from "express";
import {
    createPersonHandler,
    getPersonByIdHandler,
    listPersonsByUserHandler,
    updatePersonHandler,
    deletePersonHandler,
} from "../controllers/personController.js";


const router = Router();

router.post("/",             createPersonHandler);
router.get("/person/:userId",  listPersonsByUserHandler);
router.get("/:userId",           getPersonByIdHandler);
router.put("/:userId",           updatePersonHandler);
router.patch("/:userId",         updatePersonHandler);
router.delete("/:userId",        deletePersonHandler);

export default router;
