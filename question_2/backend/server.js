const mongoose = require("mongoose");
const PORT = 5000;
const app = require("./app");






// mongoose connection
mongoose
  .connect("mongodb://127.0.0.1/project_todo", {
        useNewUrlParser: true,
      })
      .then(() => {
            console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));




// server listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});