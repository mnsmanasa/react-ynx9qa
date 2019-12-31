import { ADD_TODO, REMOVE_TODO } from './actionTypes';

const initialState = {
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
      return {
        ...state,
        todoToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoToRemove: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}
