import express from "express";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`✅ Server Start localhost: ${PORT}`);
});
