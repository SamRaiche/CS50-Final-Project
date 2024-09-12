import React, { useState, useEffect } from 'react'

import TodoSidebar from './TodoSidebar';
import TodoList from './TodoList';
import API from '../services/api'

function TodoLists() {
    const [currentListId, setCurrentListId] = useState(0);
    const [loading, setLoading] = useState(true);

    //
    // useEffect executes during render or whenever the list of given state
    // variables change.
    //
    // Every time the component is rendered, or when the `loading` field is set
    // to true (i.e., someone triggered a load), we retrieve todo lists.
    //
    useEffect(() => {
    }, [loading, currentListId]);

    function onListSelected(listId) {
        console.log("selecting listId", listId);
        setCurrentListId(listId);
    }

    return (
        <>
            <TodoSidebar onListSelected={onListSelected} />
            <div />
            <TodoList listId={currentListId} />
        </>
    )
}

export default TodoLists;