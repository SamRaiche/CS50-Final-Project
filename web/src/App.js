import './App.css';
import { Todo } from './components/Todo';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div style= {{marginTop: 200}}></div>
      <TodoWrapper />
      <Todo />
    </div>
  );
}

export default App;
