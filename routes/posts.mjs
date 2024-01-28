import express from "express";
import { postBatchCreate, postCreate } from "../controllers/posts.mjs";

const router = express.Router();

router.post("/", postCreate);
router.post("/batch-post", postBatchCreate);

export default router;
