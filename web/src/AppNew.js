import React, { useState } from 'react';
import './App.css';
import API from './services/api'
import TodoBrowserNew from './components-new/TodoBrowserNew';

// Mock Data
const initialLists = {
    "Personal": [{ id: 1, task: "Buy groceries", completed: false }],
    "Work": [{ id: 2, task: "Send report", completed: true }],
};


return(
    <div>
        <TodoBrowserNew />
    </div>
)

export default App;