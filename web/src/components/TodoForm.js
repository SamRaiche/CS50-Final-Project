import React from 'react'

export const TodoForm = () => {
    return (
        <form className='todo-css'>
            <input type='text' className='input' placeholder='What is the task?'></input>
            <button className='button' type='submit'>Add</button>
        </form>
    )
}