import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Sample daily todos
const tasks = ["Practice coding problems"];

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/create", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
