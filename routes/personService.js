import { Router } from "express";
import {
    createPersonHandler,
    getPersonHandler,
    listPersonsByUserHandler,
    updatePersonHandler,
    deletePersonHandler,
} from "../controllers/person.controller.js";
// import { authGuard } from "../middlewares/auth.js"; // si usás auth, descomentalo

const router = Router();

router.post("/",             createPersonHandler);
router.get("/user/:userId",  listPersonsByUserHandler);
router.get("/:id",           getPersonHandler);
router.put("/:id",           updatePersonHandler);
router.patch("/:id",         updatePersonHandler);
router.delete("/:id",        deletePersonHandler);

export default router;
