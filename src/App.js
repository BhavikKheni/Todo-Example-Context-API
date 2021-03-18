import { TodoProvider } from './provider/Context';
import Todo from './todo/index';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
