function deleteAllStudents() {
  axios
    .post("/delete-all")
    .then((response) => {
      if (response.data.success) {
        location.reload();
      } else {
        alert("Failed to delete students.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred.");
    });
}

window.deleteAllStudents = deleteAllStudents;
