//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var auth = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordVerifier(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordVerifier);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (auth) res.send(__dirname + "/public/secret.html");
  else {
    res.send(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
