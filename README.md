# Todo List Web Application and API

#### Video Demo: [Watch the video here!](https://youtu.be/WT36xzns38M)
#### Description:

This project is a simple todo list application which allows you to create lists of todos. There are two folders that make up this project: `api` and `web`.

##### Web

The folder titled `web` is where the front end code is stored. Written in react, this is where the UI is that makes up the todo list users see on the screen. Three main files (in the `./web/src/components` folder) that accomplish building out the UI are `TodoBrowser.js`, `TodoSidebar.js`, and `TodoList.js`. In addition, all these files are called out of the file `App.js`. `App.js` is the main component loaded in `index.js`, which is the main entry point of a react app.

The component hierarchy is:

```
App
    TodoBrowser
        TodoSidebar
            TodoListButton
        TodoList
```

Following React's component architecture, each component has a distinct purpose.

| Component      | Purpose                                                                            |
|----------------|------------------------------------------------------------------------------------|
| App            | The "root" component                                                               |
| TodoBrowser    | It's the parent component for TodoSidebar and TodoList                             |
| TodoSidebar    | Allows a user to create a new list and select a list to show it's todos.           |
| TodoListButton | A button for a list which raises an event when clicked                             |
| TodoList       | Shows all the todos for the selected list and allows the user to create a new todo |

Within `App`, `TodoBrowser` is included as a child component. `TodoBrowser` wraps `TodoSidebar` and `TodoList`. `TodoBrowser` also maintains the state of which list is selected so the user can add to the correct list. `TodoSidebar` allows the user to create new lists through the use of a form and render each list to the screen as a button. The other file wrapped within `TodoBrowser` is `TodoList`. `TodoList` allows users to add tasks to the selected list.

We chose to write the UI in react because it's popular and provides a well defined structure for building websites. It's easier to write bigger, more complex websites in react than it would be we were to use `<script>` tags and raw javascript everywhere. The downside is there was a pretty high learning curve to react.

#### API

While we could have used local state, we wanted to create an API and save state to a database. This allows us to not lose data when we refresh the page or restart the browser as the data is stored on a server.

The API is written in [nest.js](https://nestjs.com]. Nest.js is like react in that it provides a structure and patterns for building an API. With an API this simple we could have used flask, but the structure of nest would allow me to scale it much larger.

Nest is based on modules, which encapsulate logic and components into groups. There is a single module in the `api/arc/todolist` folder. The `TodoListModule` follows's nest's recommended convention of using a service, entities and repositories. We used the default object relational mapper to save data to a sqlite database. Here is how the project is structured:


```
src/
    app.module.ts: the root module. it loads the object-relational mapper and the TodoListModule
    todolist/
        todolist.module.ts: the todolist module. The main module for the API
        todolist.controller.ts: the controller where all the API calls are defined
        todolist.service.ts: a helper function where all the "logic" of the API goes
        entities/
            todolist.entity.ts: the list entity which is stored to the database
            todo.entity.ts: the "todo" entity which is stored to the database
```

The controller uses dependency injection to register the service. The service uses dependency injection to inject repositories. Dependency injection allows us to better test each class as we can inject a "mock" dependency.

The controller defines the API calls to get all todo lists, create a new list, add a todo to the list, and set a todo as complete (there is no UI to set a todo to complete however). The controller doesn't do anything except call the service, which does the real work.

The service is what gets and saves data to the database. It uses repositories for each entity. A repository is a class which knows how to talk to the DB. For example, it provides "save" and "find" operations which translate into `INSERT` or `SELECT` sql statements.


#### Summary

This project allowed us to learn javascript better. It also made us learn about how to think about websites and APIs using frameworks which are used in the real world to build large websites and applications.

Both react and nest.js are really geared towards breaking applications down into smaller pieces. React's concept of components a lot like nest's concept of modules. Each component / module is responsible for doing one thing. It provides an interface: react's interface are "props" and "events" and nest's interface are the API calls exposed from a module's controllers.

We also liked the fact that we could use javascript on both the UI and API. There is really no getting around using javascript on the UI to make websites, but for the API I could have used any programming language. While we could have used python / flask, using nest allowed us to just use javascript everywhere.

We also had to learn how to setup our environments and get the applications to compile and run. That was a process and learning curve as we had to learn `npm` and understand things like `package.json`.