import React, {useState} from 'react';
import { Todo } from './Todo';

    export const TodoForm = () => {
        const [input, setInput] = useState(""); {/*Initialize state*/}
    
        const addTask = e => {
            e.preventDefault(); /*Prevent the form from reloading*/

            
            console.log(input)
            
        }


    return (
        <form className='todo-css' onSubmit={addTask}>
            <input 
                type='text' 
                className='input' 
                placeholder='What is the task?' 
                value={input}
                onChange = {(e) => setInput(e.target.value)}> 

                {/* // e.target is refering to the target element that triggered this event - the form changing
                // adding .value retreves the value from the input field
                // setInput updates the input state with the new value from the input field*/}

            </input> 

            <button className='button' type='submit'>Add Task</button>
        </form>
    );
}