# Todo List
#### Video Demo: <url_here>
#### Description:

This todo list project is a capstone to the CS50 course from Harvard University. There are two folders that make up this project. 

The folder titled web is where the front end code is stored. Written in react, this is where the UI is that makes up the todo list users see on the screen. The two main files that accomplish this are TodoForm and TodoWrapper. The TodoForm file has a form that takes user input and a button that allows users to submit their input and add it as a task to their todo list. The TodoWrapper than recieves that data from the TodoForm through a prop and adds that data to a list where the prop value gains a unique id. That unique id is then mapped to output each task onto the todo list.