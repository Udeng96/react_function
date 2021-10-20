import styled from "styled-components";
export const TodoItemBox = styled.div`
display: flex;
padding : 1rem;
background: white;
border-bottom : 2px solid peachpuff;
&:hover{
  background: peachpuff;
}
`;

export const CheckBox = styled.div`
display:inline;
margin: 0 1rem;
cursor : pointer;
color :  ${(props)=>props.color||"gray"};
`;

export const TextBox = styled.input`
flex : 1;
display: inline;
border: none;
outline : none;
background-color : transparent;
width: 500px;
cursor : default;
text-decoration : ${(props) => (props.checked ? "line-through" : "none")};
color: ${(props) => (props.checked ? "gray": "black")};
`;

export const Button = styled.div`
display:inline;
width : 30px,
background-color : none;
border: none;
cursor : pointer;
opacity: .2;
&:hover{
  opacity: 1;
}
`;