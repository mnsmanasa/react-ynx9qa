import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export const initialState = {
  todos: [
    {
        todo: "sdf"
      },
      {
        todo: "sdfsdf"
      }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log('reducer addodo', ...state, action.payload)
      return {
        ...state,todos: [...state.todos, {todo: action.payload}]
      };
    case REMOVE_TODO:
      console.log('remove',...state.todos)
      return {
        ...state,todos: [...state.todos].filter(x =>    x.todo!== action.payload)
      };
    default:
      return state;
  }
}
