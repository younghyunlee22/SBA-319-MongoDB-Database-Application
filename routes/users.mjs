import express from "express";
import { userList, userCreate } from "../controllers/users.mjs";

const router = express.Router();

router.get("/", userList);
router.post("/", userCreate);

export default router;
