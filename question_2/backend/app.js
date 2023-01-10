const express = require("express");
const Todo = require("./models/todoModel");
const app = express();
const todoRoute = require('./routes/todoRoutes')


app.use(express.json());
app.use('/api/v1',todoRoute)

module.exports = app;
