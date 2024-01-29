import express from "express";
import { getCommentByPostid } from "../controllers/comments.mjs";

const router = express.Router();

router.get("/:postId", getCommentByPostid);

export default router;
