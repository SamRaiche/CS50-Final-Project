import './App.css';
import { TodoSideBar } from './components/TodoSideBar';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div style= {{marginTop: 200}}></div>
      <TodoWrapper />
      <TodoSideBar />
    </div>
  );
}

export default App;
