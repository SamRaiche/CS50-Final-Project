import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();


{/* Functional component Todowrapper */}
export const TodoWrapper = () => {

    {/* todos will start as a [] and setTodos is a function that will be used to update the todos state */}
    const [todos, setTodos] = useState([]);

    {/* addTodo function takes in one perameter (the users input text aka todo) and it's purpose is to use the function setTodos to create an array containing all other todos and giving the new todos an object containing their id and their task */}
    {/* setTodos basically creates an array that includes all the privious todos and their id's as seperate dictonaries and the dictonary seen in the function below creates a new dictonary with an id and task for the new todo */}
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4, task: todo }])
    }



    return (
        <div>
            {/* Renders TodoForm and when doing so passes addTodo as a prop to the todoForm */}
            <TodoForm addTodo={addTodo} />
            <div>
                <h3>My Todos</h3>
                    {/* todos.map iterates over the todos array looing for each todo the user has typed */}
                    {/* When the map method finds a unique key it will output the task of that object (dictionary) onscreen */}
                    {todos.map((todo) => (
                        <p className='todolist' key={todo.id}>{todo.task}</p>
                    ))}
            </div>
        </div>
    );
};