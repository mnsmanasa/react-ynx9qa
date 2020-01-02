import { ADD_TODO, REMOVE_TODO, TGL_TODO } from "./actionTypes";

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  payload: todo
});

export const toggleTodo = todoId => ({
  type: TGL_TODO,
  payload: todoId
});