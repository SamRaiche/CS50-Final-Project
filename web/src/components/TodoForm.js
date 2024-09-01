import React, {useState} from 'react';

    export const TodoForm = () => {
        const [input, setInput] = useState(""); // Initialize state
    
        const addTask = (event) => {
            event.preventDefault(); // Prevent the form from reloading
            console.log(input); // Log the input value
            setInput(""); // Optionally clear the input field
        };

    return (
        <form className='todo-css' onSubmit={addTask}>
            <input 
                type='text' 
                className='input' 
                placeholder='What is the task?' 
                onChange = {(e) => setInput(e.target.value)}>
            </input>

            <button className='button' type='submit'>Add Task</button>
        </form>
    );
}