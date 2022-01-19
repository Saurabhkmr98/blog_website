const express = require("express");
const router = express.Router();

const userRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const categoryRouter = require("./routes/categories.routes");
const postRouter = require("./routes/posts.routes");

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/posts", postRouter);

module.exports = router;
