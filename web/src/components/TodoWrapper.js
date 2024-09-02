import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {

    const [todo, setTodo] = useState([])

    const addTodo = tassk => {
        setTodo([...todo, {id: uuidv4, task: tassk, completed: false, editing: false}])
    }

    return (
        <div>
            <TodoForm addTodo = {addTodo}/>
        </div>
    )
}