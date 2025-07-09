import express from "express"
const router = express.Router()
import auth_controller from "../controllers/auth_controller.js"
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: { error: "Too many login attempts. Please try again later after 5 mins." },
});

router.route("/").get(auth_controller.home)
router.route("/login").get(loginLimiter,auth_controller.login)
router.route("/register").post(auth_controller.register)

export default router