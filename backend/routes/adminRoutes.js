import { Router } from "express";
import {
    adminCreateCourseHandler,
    adminListUsersHandler,
    adminPersonsTableHandler,
    adminCompaniesTableHandler,
    adminCoursesTableHandler,
    adminListPurchasesHandler,
    adminPurchasesTableHandler,
    adminCoursesWithPurchaseCountHandler,
} from "../controllers/adminController.js";
import { authMiddleware as authGuard } from "../middlewares/authMiddleware.js";
import { adminMiddleware as adminGuard } from "../middlewares/adminMiddleware.js";
import expressasyncerrors from "express-async-errors";


const router = Router();

router.use(authGuard, adminGuard);

router.post("/courses", adminCreateCourseHandler);
router.get("/users", adminListUsersHandler);

router.get("/tables/persons", adminPersonsTableHandler);
router.get("/tables/companies", adminCompaniesTableHandler);
router.get("/tables/courses", adminCoursesTableHandler);

router.get("/purchases", adminListPurchasesHandler);
router.get("/tables/purchases", adminPurchasesTableHandler);

router.get("/courses/purchase-count", adminCoursesWithPurchaseCountHandler);

export default router;
