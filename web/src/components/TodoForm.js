import React from 'react'

export const TodoForm = () => {
    return (
        <form className='todoTitle'>
            <input type='text' className='todoInput' placeholder='What is the task?'></input>
            <button className='todoButton' type='submit'>Add</button>
        </form>
    )
}