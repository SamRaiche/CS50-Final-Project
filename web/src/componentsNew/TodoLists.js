import React from 'react';
import TodoLists from './TodoLists';


function TodoLists({ tasks, toggleComplete, selectedList }) {
    return (
        <div>
            <h2>{selectedList} To-Dos</h2>
            <ul>
                {tasks.map((task) => (
                    <li 
                        key={task.id} 
                        className={task.completed ? "completed" : ""}
                        onClick={() => toggleComplete(task.id)}
                    >
                        {task.task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoLists;