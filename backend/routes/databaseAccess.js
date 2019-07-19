const express = require('express');
const router = express.Router();
const TodoItem = require("../models/TodoItem")

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
      task: req.body.task,
      completed: req.body.completed
    });
  
    testTodo.save()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
});

router.get("/all", (req,res) =>{
  TodoItem.find()
    .exec((err, todos) =>{
      if(err){
        console.log("cannot get /all", err)
      } else{
        res.send(todos)
      }
    })
})

router.post("/toggle", (req,res)=>{
  TodoItem.findById(req.body.id, (err,item) =>{
    if (err){
      console.log("Can't find by id to toggle")
    } else{
      let toggle = !item.completed
      item.completed = toggle
      item.save()
        .then(response => {
          res.send(response);
        })
        .catch(error => {
          res.send(error);
        })
    }
  })
})

router.post("/remove", (req,res)=>{
  TodoItem.findById(req.body.id, (err,item) =>{
    if (err){
      console.log("Can't find by id to remove")
    } else{
      item.remove()
        .then(response => {
          res.send(response);
        })
        .catch(error => {
          res.send(error);
        })
    }
  })
})


module.exports = router;