import User from "../models/user.mjs";

export const userList = async (req, res) => {
  try {
    let limit = 12;
    if (req.query) limit = req.query.limit;

    const users = await User.find({}).limit(limit);
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const userCreate = async (req, res) => {
  try {
    const { userId, firstName, lastName, email, username } = req.body;
    const user = new User({
      userId,
      firstName,
      lastName,
      email,
      username,
    });
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
