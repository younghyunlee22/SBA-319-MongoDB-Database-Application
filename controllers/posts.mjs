import Post from "../models/post.mjs";
import User from "../models/user.mjs";

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

export const findPostByUserid = async (req, res) => {
  try {
    const { userId } = req.params;
    const foundPost = await Post.find({ userId: userId }).populate(
      "user",
      "username"
    );
    res.json({ success: true, foundPost });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

// export const findPostByUsername = async (req, res) => {
//   try {
//     const { username2 } = req.params;
//     const foundPosts = await Post.find({}).populate("user", "username");
//     const foundPost2 = foundPosts.find(
//       (post) => post.user.username === username2
//     );
//     console.log(foundPost2);
//     res.json(foundPost2);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ success: false, error: err.message });
//   }
// };
