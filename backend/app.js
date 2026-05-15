const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/movie", movieRoutes );
app.use("/api/theatre", theatreRoutes);

app.get("/", (req, res)=>{
  res.send("App running");
});

module.exports = app;
