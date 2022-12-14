const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/authors_assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the mongoose database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );