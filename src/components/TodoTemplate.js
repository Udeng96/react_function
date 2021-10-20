import { Template, Title } from "../styled/common-styled";

const TodoTemplate = ({children}) =>{
  return (
    <Template>
      <Title>Todo List</Title>
      {children}
    </Template>
  );
};

export default TodoTemplate;