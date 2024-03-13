import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post(
    "/create",
    controllers.createNewTimeShare,
)

router.get(
    "/getAll",
    controllers.getAllTimeShare,
)

router.get(
    "/getAllByStaff/:userID",
    controllers.getAllTimeShareByStaff,
)

router.get(
    "/getAll/:projectID",
    controllers.getAllTimeShareOfProject,
)

router.get(
    "/getAllByStaff",
    controllers.getAllTimeShareOfProjectByStaff,
)

router.get(
    "/:id",
    controllers.getDetailsTimeShare,
)

router.get(
    "",
    controllers.getDetailsTimeShareByStaff,
)

export default router;
