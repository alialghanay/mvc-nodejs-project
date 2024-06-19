const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db.js");
const dashboardRoutes = require("./routes/dashboard");
const addStudent = require("./routes/add-student");
const deleteAll = require("./routes/delete-all-student.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", dashboardRoutes);
app.use("/add-student", addStudent);
app.use("/delete-all", deleteAll);

db.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Server is running on port: " + PORT));
});
