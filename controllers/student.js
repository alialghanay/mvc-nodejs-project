const Student = require("../models/Student");

module.exports = {
  addStudentView: (req, res) => {
    res.render("add-student");
  },
  addStudent: async (req, res) => {
    const { name, address, age } = req.body;
    if (!name || !address || !age) {
      return res.render("add-student", { error: "Please fill all fields" });
    }
    await Student.create({ name, address, age });

    return res.redirect("/");
  },
};
