import React from 'react';


function TodoLists({ tasks, completionStatus, selectedList }) {
    return (
        <div>
            <h2>{selectedList} Todo's</h2>
            <ul>
                {tasks.map((task) => (
                    <li 
                        key={task.id} 
                        className={task.completed ? "completed" : ""}
                        onClick={() => completionStatus(task.id)}
                    >
                        {task.task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoLists;