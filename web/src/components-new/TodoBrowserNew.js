import React from 'react'

import TodoLists from './TodoLists'
import TodoSearch from './TodoSearch'

export default function TodoBrowserNew() {
  return (
    <div>
        <TodoLists />
        <TodoSearch />
    </div>
  )
}


// Call in TodoLists and TodoSearch