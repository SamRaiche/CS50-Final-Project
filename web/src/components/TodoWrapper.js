import React, {useState}from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {

    const [todo, setTodo] = useState([])

    const updateTask = tassk => {
        setTodo([...todo, {id: uuidv4(),task: tassk, completed: false, editing: false}]);
        console.log(todo);
    }

    return (
        <div>
            <TodoForm updateTask = {updateTask}/>
        </div>
    )
}