import React, { useState } from 'react';

function TodoAdd({ addTask }) {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask("");
        }
    };

    return (
        <div className="new-task">
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TodoAdd;