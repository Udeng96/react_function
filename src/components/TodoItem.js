import React from "react";
import {
  Button,
  CheckBox,
  TextBox,
  TodoItemBox,
} from "../styled/todoItem-styled";
import { useDispatch } from "react-redux";
import { todoRemove, todoToggle} from "../reducer/Todo";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
const TodoItem = ({ todo }) => {
  const { id, text, isCompleted } = todo;
  const dispatch = useDispatch();

  return (
    <TodoItemBox>
      <CheckBox onClick={() => dispatch(todoToggle(id))}>
        {isCompleted ? (
          <FaRegCheckSquare size="25px" color="#84a98c" />
        ) : (
          <FaRegSquare size="25px" />
        )}
      </CheckBox>
      <TextBox id="text" readOnly={true} value={text} checked={isCompleted} />


      <Button onClick={() => dispatch(todoRemove(id))}>
        <TiDeleteOutline size="30px" color="#e56b6f" />
      </Button>
    </TodoItemBox>
  );
};

export default TodoItem;