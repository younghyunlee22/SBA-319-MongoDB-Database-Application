import express from "express";
import { create } from "../controllers/posts.mjs";

const router = express.Router();

router.post("/new", create);

export default router;
