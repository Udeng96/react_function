import styled from "styled-components";

export const TodoInputBox = styled.div`
border-top : 1px solid black;
display: flex;
background: white;
padding : 1rem;
`;

export const Input = styled.input`
flex : 1;
font-size : 1.1rem;
outline : none;
border: none;
border-bottom : 1px solid black;
background : transparent;
`;

export const AddButton = styled.button`
outline : none;
border: none;
border-radius : 20px 20px;
background-color : peachpuff;
padding : 1rem 2rem;
color : black;
font-size :15px;
cursor : pointer;
&:hover{
  background-color: #e29578;
  color : #ffffff;
}
&:active{
  background-color : #e29578;
  color : #ffffff;
}
`;