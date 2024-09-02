import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {


    return (
        <div>
            <TodoForm />
        </div>
    )
}