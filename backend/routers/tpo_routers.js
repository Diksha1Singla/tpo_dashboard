import e from "express";
const router = e.Router()
import tpoController from "../controllers/tpo_controller.js"

router.route("/addTPO").post(tpoController.addTPO)
router.route("/searchTPO").get(tpoController.searchTPO)

export default router