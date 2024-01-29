import Post from "../models/post.mjs";

export const postCreate = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    if (typeof title !== "string" || typeof body !== "string") {
      return res.send("Please input texts.");
    }
    if (typeof userId !== "number") {
      return res.send("usedId should be a number");
    }

    const newPost = new Post({
      ...req.body,
    });
    await newPost.save();
    return res.status(200).json({ success: true, newPost });
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
    const foundPosts = await Post.find({ userId: userId });
    res.json({ success: true, foundPosts });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, error: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    // this id is a number value of the 'id' field of a post document
    const { title, body, tags } = req.body;

    let foundPost = await Post.findOne({ id: id });

    if (!foundPost) {
      return res.send("error/404: No post found");
    }

    if (foundPost.userId != req.body.userId) {
      res.send("Not authorized to edit this post");
    } else {
      foundPost.title = title;
      foundPost.body = body;
      foundPost.tags = tags;

      await foundPost.save();
      res.json({ success: true, updatedPost: foundPost });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const foundPost = await Post.findOne({ id: id });

    if (!foundPost) {
      return res.send("error/404: No post found");
    }

    if (foundPost.userId != userId) {
      res.send("Not authorized to delete this post");
    } else {
      await foundPost.deleteOne();
      res.json({ success: true, deletedPost: foundPost });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, error: err.message });
  }
};
