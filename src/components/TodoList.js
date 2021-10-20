import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(){
  //useSelector의 기능 알아보기
  const todos = useSelector((state)=>state.todos);
  return (
    <div>
      {todos.map((todo)=>(
        <TodoItem key= {todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList;