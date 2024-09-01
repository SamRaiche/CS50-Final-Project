import React, {useState} from 'react';

    export const TodoForm = ({updateTask}) => {
        const [input, setInput] = useState(""); {/*Initialize state*/}
    
        const addTask = e => {
            e.preventDefault(); /*Prevent the form from reloading*/

            updateTask(input);
            setInput("")
        };

    return (
        <form className='todo-css' onSubmit={addTask}>
            <input 
                type='text' 
                className='input' 
                placeholder='What is the task?' 
                onChange = {(e) => setInput(e.target.value)}> 

                {/* // e.target is refering to the target element that triggered this event - the form changing
                // adding .value retreves the value from the input field
                // setInput updates the input state with the new value from the input field*/}

            </input> 

            <button className='button' type='submit'>Add Task</button>
        </form>
    );
}