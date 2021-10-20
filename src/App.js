import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
function App() {
  return (
    <TodoTemplate>
      <TodoInput/>      
      <TodoList  />
    </TodoTemplate>
  );
}

export default App;
