import React, { useState, useEffect } from 'react'

import API from '../services/api'

function TodoList({ listId }) {
    const [todoList, setTodoList] = useState(null);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(true);

    console.log("creating todolist: ", listId);

    //
    // useEffect executes during render or whenever the list of given state
    // variables change.
    //
    // Every time the component is rendered, or when the `loading` field is set
    // to true (i.e., someone triggered a load), we retrieve todo lists.
    //
    // Helps maintain state when toggling between lists
    useEffect(() => {
        if (listId <= 0) {
            return;
        }
        API.getList(listId).then(list => {
            console.log('retrieved list: ', list);
            setTodoList(list);
        }).catch((error) => {
            console.log("api error occurred: ", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [loading, listId]);

    const addTodo = (e) => {
        e.preventDefault();  // Prevent the form from reloading

        if (!newTodo.trim()) { // Checks for empty input
            return;
        }

        if (!todoList) {
            console.log("warning: list isn't loaded");
            return;
        }
        API.createTodo(listId, newTodo).then(() => {
            setLoading(true);
            setNewTodo("");
        }).catch((error) => {
            console.log("api error occurred: ", error);
        })
    }

    if (!todoList) {
        return <b>select a list</b>
    }

    // Generates div's for each todo title in a specific todo list recgonized by a todo it
    const todos = todoList.todos.map(todo => {
        return <div key={todo.id}>{todo.title} {todo.completed ? "(completed)" : ""}</div>
    });

    return (
        <>
            {todos}
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