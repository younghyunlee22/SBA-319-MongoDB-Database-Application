import Comment from "../models/comment.mjs";

export const getCommentByPostid = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(req.params);

    const foundComments = await Comment.find({ postId: postId });
    res.json({ success: true, foundComments });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, error: err.message });
  }
};
