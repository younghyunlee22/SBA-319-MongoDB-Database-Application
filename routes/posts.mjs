import express from "express";
import {
  findPostByUserid,
  postBatchCreate,
  postCreate,
} from "../controllers/posts.mjs";

const router = express.Router();

router.post("/", postCreate);
router.post("/batch-post", postBatchCreate);
// router.get("/:userId", updatePost);
router.get("/:userId", findPostByUserid);

export default router;
