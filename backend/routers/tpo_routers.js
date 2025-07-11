import e from "express";
const router = e.Router()
import tpoController from "../controllers/tpo_controller.js"

router.route("/addTPO").post(tpoController.addTPO)
router.route("/getTPO").get(tpoController.getTPO)
router.route("/searchTPO").post(tpoController.searchTPO)

export default router