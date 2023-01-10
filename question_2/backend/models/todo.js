const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const todo = mongoose.model("todo", todoSchema);

module.exports=todo;
