import './App.css';
// import { TodoSideBar } from './components/TodoSideBar';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: 200 }}></div>
      <TodoLists />
    </div>
  );
}

export default App;
