const Student = require("../models/Student");

module.exports = {
  dashboardView: async (req, res) => {
    try {
      const students = await Student.findAll();
      res.render("dashboard", { students });
    } catch (error) {
      res.render("dashboard", {
        students: [],
        error: "Failed to load students",
      });
    }
  },
};
