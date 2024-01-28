import Post from "../models/post.mjs";

export const create = async (req, res) => {
  const { user, title, body } = req.body;
  try {
    const newPost = await Post.create({
      title,
      user,
      body,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};
