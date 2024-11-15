import React, { useState, useEffect } from 'react';
import API from '../services/api'

function TodoListButton({ todoList, onListSelected }) {
    function selectList(e) {
        onListSelected(todoList.id);
    }
    return <button onClick={selectList}>{todoList.name}</button>
}

function TodoSidebar({ onListSelected }) {
    const [listName, setListName] = useState("");
    const [todoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pull in existing lists from Todo lists
    useEffect(() => {
        console.log("sidebar useEffect");
        API.getLists().then(lists => {
            setTodoLists(lists)
        }).catch((error) => {
            console.log("API error occurred: ", error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [loading]);

    function addList(e) {
        e.preventDefault();  // Prevent the form from reloading
        if (listName.trim()) {
            API.createList(listName).then(() => {
                setLoading(true);
                setListName("");
            });
        }
    }

    if (error) {
        return <b>API error occurred</b>
    }

    console.log('rendering sidebar');
    const todoComponents = todoLists.map(tList => {
        return <TodoListButton todoList={tList} onListSelected={onListSelected} />

    });

    return (
        <>
            <form className='todo-css' onSubmit={addList}>
                <input
                    type='text'
                    className='input'
                    placeholder='Create a list...'
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}>
                </input>
                <button className='button' type='submit'>Create List</button>
            </form>
            <div>
                {todoComponents}
            </div >
        </>
    );
}

export default TodoSidebar;