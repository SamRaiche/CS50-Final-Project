import React, { useState } from 'react';
import './App.css';
import TodoLists from './componentsNew/TodoLists';
import TodoAdd from './componentsNew/TodoSearch';

const initialLists = {
    "Personal": [{ id: 1, task: "Buy groceries", completed: false }],
    "Work": [{ id: 2, task: "Send report", completed: true }],
};

function App() {
    const [lists, setLists] = useState(initialLists);
    const [selectedList, setSelectedList] = useState("Personal");

    // Change list on sidebar click
    const handleListClick = (listName) => {
        setSelectedList(listName);
    };

    // Add a new task to the selected list
    const handleAddTask = (task) => {
        const newTaskObj = {
            id: Date.now(),
            task,
            completed: false,
        };
        setLists({
            ...lists,
            [selectedList]: [...lists[selectedList], newTaskObj],
        });
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
                <TodoLists 
                    tasks={lists[selectedList]} 
                    toggleComplete={handleToggleComplete} 
                    selectedList={selectedList}
                />
                <TodoAdd addTask={handleAddTask} />
            </main>
        </div>
    );

}

export default App;