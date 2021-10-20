import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { todoInsert } from "../reducer/Todo";
import { TodoInputBox,Input, AddButton } from "../styled/todoInput-styled";

const TodoInput = () =>{
  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);

  //이벤트가 발생한 후에, 상태 변화시에 action을 준다.
  const dispatch = useDispatch();

  //변화가 있을 경우에 새로운 Input 값으로 상태변화 해준다.
  const onChangeInput= (e) => {
    setTodoInput(e.target.value);
  };

  //삭제 되었을 때, Input값을 초기화 해준다.
  const onRemove=()=>{
    setTodoInput("");
  }

  //엔터키를 눌렀을 때의 이벤트
  const onKeyPress=(e)=>{
    if(e.key === "Enter"){
      addTodo();
    }
  }

  //작성한 Todo 저장하기
  const addTodo = () =>{
    if(todoInput.length === 0){
      alert("내용을 입력해주세요.");
      return;
    }

    //이벤트가 발생했기 때문에 action을 준다.
    dispatch(todoInsert(nextId.current, todoInput));
    nextId.current += 1;

    //생성 후에는 다시 Input을 초기화 해준다.
    onRemove();
  }

  return(
    <TodoInputBox>
      <Input 
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="할 일을 입력하세요."
      />
      <AddButton onClick = {addTodo}>ADD</AddButton>
    </TodoInputBox>
  )
}

export default TodoInput;