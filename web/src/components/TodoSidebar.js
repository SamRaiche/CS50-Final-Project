import React, { useState, useEffect } from 'react';
import API from '../services/api'

function TodoListButton({ todoList, onListSelected }) {
    function selectList(e) {
        console.log("selecting list: ", todoList.id);
        onListSelected(todoList.id);
    }
    return <button onClick={selectList}>{todoList.name}</button>
}

function TodoSidebar({ onListSelected }) {
    // initialize state
    const [listName, setListName] = useState("");
    const [todoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        API.getLists().then(lists => {
            setTodoLists(lists)
        }).catch((error) => {
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

    return (
        <>
            <form className='todo-css' onSubmit={addList}>
                <input
                    type='text'
                    className='input'
                    placeholder='Create a list...'
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}>
                    {
                        // e.target is refering to the target element that triggered this event. i.e., the input field
                        // adding .value retreves the value from the input field
                        // setInput updates the input state with the new value from the input field
                    }
                </input>
                <button className='button' type='submit'>Create List</button>
            </form>
            <div>
                {todoLists.map(tList => (
                    <TodoListButton todoList={tList} onListSelected={onListSelected} />
                ))}
            </div >
        </>
    );
}

export default TodoSidebar;