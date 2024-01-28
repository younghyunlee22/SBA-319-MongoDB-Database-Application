import post from "../models/post.mjs";
import Post from "../models/post.mjs";

export const postCreate = async (req, res) => {
  try {
    const newPost = new Post({
      ...req.body,
    });
    await newPost.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const postBatchCreate = async (req, res) => {
  try {
    const docs = [...req.body];
    const insertedDocs = await Post.insertMany(docs);
    res.json({ success: true, insertedDocs });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};
