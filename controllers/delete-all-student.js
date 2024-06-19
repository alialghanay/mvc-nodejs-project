const Student = require("../models/Student");

module.exports = {
  deleteAllStudents: async (req, res) => {
    try {
      await Student.truncate();
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false, error: "Failed to delete students" });
    }
  },
};
