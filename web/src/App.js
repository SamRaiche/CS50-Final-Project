import React, { useState } from 'react';
import './App.css';
import API from './services/api'

// Mock Data
const initialLists = {
    "Personal": [{ id: 1, task: "Buy groceries", completed: false }],
    "Work": [{ id: 2, task: "Send report", completed: true }],
};

function App() {
    const [lists, setLists] = useState(initialLists);
    const [selectedList, setSelectedList] = useState("Personal");
    const [newTask, setNewTask] = useState("");

    // Change list on sidebar click
    const handleListClick = (listName) => {
        setSelectedList(listName);
    };

    // Add a new task to the selected list
    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        const newTaskObj = {
            id: Date.now(),
            task: newTask,
            completed: false,
        };
        setLists({
            ...lists,
            [selectedList]: [...lists[selectedList], newTaskObj],
        });
        setNewTask("");
    };

    // Toggle completion status
    const handleToggleComplete = (taskId) => {
        setLists({
            ...lists,
            [selectedList]: lists[selectedList].map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
        });
    };

    return (
        <div className="App">
            <aside className="sidebar">
                <h2>Lists</h2>
                {Object.keys(lists).map((listName) => (
                    <button
                        key={listName}
                        onClick={() => handleListClick(listName)}
                        className={selectedList === listName ? "active" : ""}
                    >
                        {listName}
                    </button>
                ))}
            </aside>
            <main className="main-content">
                <h2>{selectedList} To-Dos</h2>
                <ul>
                    {lists[selectedList].map((task) => (
                        <li key={task.id} className={task.completed ? "completed" : ""}>
                            <span onClick={() => handleToggleComplete(task.id)}>
                                {task.task}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="new-task">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            </main>
        </div>
    );
}

export default App;