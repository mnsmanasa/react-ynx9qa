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
        filteredTodos: [
          ...state.todos,
          { id: state.initializeId++, todo: action.payload, completed: false }
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        filteredTodos: [...state.todos].filter(x => x.todo !== action.payload)
      };
    case TGL_TODO:
      state.todos.forEach(x => {
        if (x.id === Number(action.payload)) {
          x.completed = !x.completed;
          console.log(x.completed);
        }
      });
      return {
        ...state,
        filteredTodos: [...state.todos]
      };
    case FLTR_TODO:
      if (action.payload === "true" || action.payload === "false") {
        var x = state.todos.filter(todo => {
          return String(todo.completed) === action.payload;
        });
        return {
          ...state,
          filteredTodos: x
        };
      } else {
        console.log(state.todos)
        return {
          ...state,
          filteredTodos: [...state.todos]
        };
      }
    default:
      return state;
  }
}
