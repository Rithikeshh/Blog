const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
app.use(express.json());
app.use(cors());

app.use("/api/auth", userRouter)
app.use("/api/blog", blogRouter)

module.exports = app