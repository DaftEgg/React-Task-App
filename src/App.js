import { useState, useEffect } from 'react';
import Header from './components/Header'
import TasksArea from './components/TasksArea'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  const [nightMode, setNightMode] = useState(true)

  // Fetch Tasks
  useEffect(() => {
    const getTasksFromServer = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      setTasks(data)
    }
    getTasksFromServer()

    nightMode ? document.body.className = "dark" : document.body.className = "light"
  }, [nightMode])

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Add Reminder
  const setReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, hasReminder: !taskToToggle.hasReminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, hasReminder: data.hasReminder } : task))
  }

  const toggleNightMode = () => {
    setNightMode(!nightMode)

    nightMode ? document.body.className = "dark" : document.body.className = "light"
  }

  return (
    <div className={`container ${nightMode ? 'dark-mode' : 'light-mode'}`}>
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} onToggleNightMode={toggleNightMode} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <TasksArea tasks={tasks} onDelete={deleteTask} onAddReminder={setReminder} /> : "There are no tasks"}
    </div>
  );
}

export default App;
