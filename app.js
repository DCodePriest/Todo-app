const express = require("express")
const app = express()

app.use(express.json())

let tasks = []

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks)
})

// Add task
app.post("/tasks", (req, res) => {
  const task = req.body.task
  tasks.push({task: task, completed: false})
  res.status(201).json({message: "Task added successfully"})
})

// Mark task as complete
app.put("/tasks/:id", (req, res) => {
  const id = req.params.id
  if (tasks[id]) {
    tasks[id].completed = true
    res.json({message: "Task marked as complete"})
  } else {
    res.status(404).json({message: "Task not found"})
  }
})

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id
  if (tasks[id]) {
    tasks.splice(id, 1)
    res.status(204).json({message: "Task deleted successfully"})
  } else {
    res.status(404).json({message: "Task not found"})
  }
})

app.listen(3000, () => {
  console.log("Running on port 3000")
})
