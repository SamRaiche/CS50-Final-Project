import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { TodoForm } from './TodoForm'

function TodoLists() {

    const [todoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect executes during render or whenever the list of given state variables change
    useEffect(() => {
        axios
            .get("/todolist")
            .then((response) => {
                console.log(response.data);
                console.log(Array.isArray(response.data));
                setTodoLists(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [loading]);

    const addTodo = (title) => {

        const lst = todoLists[0];
        console.log("sending to server");
        console.log(title);
        console.log(lst);

        // TODO: determine what list (via the sidebar?) to send the new item to the current list
        axios
            .post(`/todolist/${lst.id}`, { "title": title })
            .then((response) => {
                setLoading(true);
            })
    }

    // Renders TodoForm and when doing so passes addTodo as a prop to the todoForm

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <div>
                {todoLists.map(todoList => (
                    <div>
                        <div><b>{todoList.name}</b></div>
                        <ul>
                            {todoList.todos.map(todo => (
                                <li>{todo.title} {todo.completed ? "(completed)" : ""}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>)
}


export default TodoLists;