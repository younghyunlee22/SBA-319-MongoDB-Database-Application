import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(morgan("combined"));
app.use(express.json());

// Routes

import userRoutes from "./routes/users.mjs";
import postRoutes from "./routes/posts.mjs";
// import commentRoutes from "./routes/comments.mjs";
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
// app.use("comments", commentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
