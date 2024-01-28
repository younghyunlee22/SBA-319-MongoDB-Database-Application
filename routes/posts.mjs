import express from "express";
import {
  deletePost,
  findPostByUserid,
  postBatchCreate,
  postCreate,
  updatePost,
} from "../controllers/posts.mjs";

const router = express.Router();

router.post("/", postCreate);
router.post("/batch-post", postBatchCreate);
router.get("/:userId", findPostByUserid);
router.put("/edit/:id", updatePost);
router.delete("/:id/:userId", deletePost);
export default router;
