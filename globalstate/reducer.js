import { ADD_TODO, REMOVE_TODO, TGL_TODO, FLTR_TODO } from "./actionTypes";

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
  ],
  filteredTodos: [],
  initializeId: 3
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log("reducer addodo", ...state, action.payload);
      return {
        ...state,
        todos: [...state.todos, { id: state.initializeId++,todo: action.payload, completed: false }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter(x => x.todo !== action.payload)
      };
    case TGL_TODO:
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
    case FLTR_TODO:
    console.log(state.todos)
      var x = state.todos.filter(todo => {
        if(action.payload === "true" || action.payload === "false") {
        return String(todo.completed) === action.payload
        } else {
          return state.todos
        }
      })
      state.filteredTodos = x
      console.log(state.todos)
    return {
        ...state,
        todos: [...state.filteredTodos]
      };
    default:
      return state;
  }
}
