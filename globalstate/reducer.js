import { ADD_TODO, REMOVE_TODO, TGL_TODO } from "./actionTypes";

export const initialState = {
  todos: [
    {
      id: 1,
      todo: "sdf",
      completed: true
    },
    {
      id: 2,
      todo: "sdfsdf",
      completed: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log("reducer addodo", ...state, action.payload);
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload }]
      };
    case REMOVE_TODO:
      // console.log("remove", [...state.todos]);
      return {
        ...state,
        todos: [...state.todos].filter(x => x.todo !== action.payload)
      };
    case TGL_TODO:
      console.log('toggle', ...state.todos)
      state.todos.forEach(x => 
          {if(x.id === Number(action.payload)){
            x.completed = !x.completed
            console.log(x.completed)
          }}
      )
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
}
