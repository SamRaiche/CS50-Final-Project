import React from 'react'

export default function TodoLists() {

    // Change list on sidebar click
    const handleListClick = (listName) => {
        setSelectedList(listName);
    };

  return (
    <div>TodoLists</div>
  )
}


// List title
// List props - list names as buttons
