const express = require("express");
const cors = require("cors");
const app = express();

const category = require("./data/category.json");
const courses = require("./data/courses.json");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/categories", (req, res) => {
  res.send(category);
});

app.get("/category/:id", (req, res) => {
  const catID = req.params.id;

  console.log(catID);

  if (catID == 7) {
    res.send(courses);
  } else {
    const courseByCat = courses.filter((course) => course.catID == catID);
    res.send(courseByCat);
  }
});

app.get("/course/:id", (req, res) => {
  const courseID = req.params.id;
  const courseByID = courses.find((course) => course.courseID == courseID);
  res.send(courseByID);
});

app.listen(port, (result) => {
  console.log("server running on ", port);
});
