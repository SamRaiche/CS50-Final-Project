import React, { useState } from 'react'

import TodoSidebar from './TodoSidebar';
import TodoList from './TodoList';

export default function TodoBrowser() {
    const [currentListId, setCurrentListId] = useState(0);

    function onListSelected(listId) {
        console.log("selecting listId", listId);
        setCurrentListId(listId);
    }

    console.log("TodoBrowser.rendering: ", currentListId);
    return (
        <>
            <TodoSidebar onListSelected={onListSelected} />
            <div />
            <TodoList listId={currentListId} />
        </>
    )
}