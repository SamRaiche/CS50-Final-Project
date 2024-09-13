# Todo List
#### Video Demo: <url_here>
#### Description:

This todo list project is a capstone to the CS50 course from Harvard University. There are two folders that make up this project. 

The folder titled web is where the front end code is stored. Written in react, this is where the UI is that makes up the todo list users see on the screen. Three main files (in the componets folder in the src folder) that accomplish building out the UI are TodoBrowser, TodoSidebar, and TodoList. In addition, all these files are called out of the file App which is just a file in the web folder. App provides the structure for how the website will look. Within App, TodoBrowser is passed as a component and TodoBrowser wraps TodoSidebar and TodoList into the web app. TodoBrowser also maintains the state of which list is selected so the user can add to the correct list. The file TodoSidebar's main functionality is to create new lists through the use of a form and output them to the screen as buttons. The other file wrapped within TodoBrowser is TodoList. TodoList's main functionality is to allow users to add tasks to their todolists.