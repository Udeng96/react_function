//액션 정의

const TODO_INSERT = 'TODO/INSERT';
const TODO_REMOVE = 'TODO/REMOVE';
const TODO_UPDATE = 'TODO/UPDATE';
const TODO_TOGGLE = 'TODO/TOGGLE';

//액션 생성 함수
export const todoInsert = (id, text) =>{
  return {
    type : TODO_INSERT,
    payload:{
      id: id,
      text: text,
      isCompleted : false,
    },
  }
}

export const todoRemove = (id) =>{
  return{
    type:TODO_REMOVE,
    payload:{
      id: id,
    }
  }
}

export const todoUpdate = (id, text) =>{
  return{
    type:TODO_UPDATE,
    payload:{
      id: id,
      text: text,
    }
  }
}

export const todoToggle = (id) =>{
  return{
    type: TODO_TOGGLE,
    payload : {id: id},
  }
}

//초기상태생성

const initState={
  todos : [
    {
      id: 1,
      text : "TODO 생성",
      isCompleted : false,
    }
  ]
}

//리듀서 생성

export default function todoReducer(state=initState, {type, payload}) {
switch(type){

  // TODO 추가
  case TODO_INSERT:
    return{
      ...state,
      todos : state.todos.concat({
        id : payload.id,
        text : payload.text,
        isCompleted : false,
      })
    }

  // TODO 제거
  case TODO_REMOVE:
    return{
      ...state,
      // 선택한 id와 다른 id로만 todos 재구성
      todos : state.todos.filter((todo)=>todo.id !== payload.id),
      }

  // TODO 수정
  case TODO_UPDATE:
    return{
      ...state,
      todos: state.todos.map((todo)=>
      // id가 같을 경우 ...todo를 통해 원본을 복사
      // text 항목만 값을 수정해서 넣게 된다.
      todo.id ===payload.id ? {...todo, text:payload.text} : todo),
    };

  // TODO TOGGLE
  case TODO_TOGGLE:
    return{
      ...state,
      todos: state.todos.map((todo)=>
      // toggle을 누르게 되면 현재 isCompleted의 상태를 반대로 변경한다.
      todo.id === payload.id?{...todo, isCompleted: !todo.isCompleted}:todo),
    }
  default:
    return {...state};
}
}