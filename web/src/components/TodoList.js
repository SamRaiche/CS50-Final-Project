import React, { useState, useEffect } from 'react'

import API from '../services/api'

function TodoList({ listId }) {
    const [todoList, setTodoList] = useState(null);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //
    // useEffect executes during render or whenever the list of given state
    // variables change.
    //
    // Every time the component is rendered, or when the `loading` field is set
    // to true (i.e., someone triggered a load), we retrieve todo lists.
    //
    useEffect(() => {

        if (listId <= 0) {
            return;
        }

        console.log("loading list", listId);

        API.getList(listId).then(list => {
            console.log('retrieved list: ', list);
            setTodoList(list);
            setLoading(false);
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [loading, todoList]);

    const addTodo = (e) => {
        e.preventDefault();  // Prevent the form from reloading

        if (!newTodo.trim()) {
            return;
        }

        if (!todoList) {
            console.log("warning: list isn't loaded");
            return;
        }
        API.createTodo(todoList.id, newTodo).then(() => {
            setLoading(true);
            setNewTodo("");
        });
    }

    // Renders TodoForm and when doing so passes addTodo as a prop to the todoForm
    if (error) {
        return (
            <b>An error occurred: {error}</b>
        )
    }
    console.log("rendering list: ", listId, "todo list: ", todoList);
    if (!todoList) {
        return <b>select a list</b>
    }

    return (
        <>
            {todoList.todos.map(todo => (
                <div key={todo.id}>{todo.title} {todo.completed ? "(completed)" : ""}</div>
            ))}
            <form className='todo-css' onSubmit={addTodo}>
                <input
                    type='text'
                    className='input'
                    placeholder='New todo..'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}>
                </input>
                <button className='button' type='submit'>Add todo</button>
            </form>
        </>
    )
}



export default TodoList;