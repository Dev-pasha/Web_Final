const express = require ('express');
// const {TODO} = require('../models/todoModel')
const todo = require('../models/todo')
const router = express.Router();


// get todo
router.get("/todo", async (req, res) => {
      const comingtodo = await todo.find();
    //   return res.send(comingtodo);
     return  res.status(200).json({
        status: "success",
        data: comingtodo,
      });
    });


//  // create todo
router.post("/todo/create", async (req, res) => {
  const newTodo = await todo.create(req.body);
  await newTodo.save();
//   res.send(newTodo);
  res.status(200).json({
    success: true,
    message: "Todo created",
  });
});


// // delete todor
router.delete("/todo:id", async (req, res) => {
    const todo = await todo.findById(req.params.id);
    await todo.remove();
    res.send(todo);
    res.status(200).json({
        success: true,
        message: "Todo deleted",
    });
});

// // update todo
router.put("/todo/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.title = req.body.title;
    todo.description = req.body.description;
    await todo.save();
    res.status(200).json({
        success: true,
        message: "Todo updated",

    });
})



module.exports = router;