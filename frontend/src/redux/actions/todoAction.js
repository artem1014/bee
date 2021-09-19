import axios from 'axios'
const { ADD_TODO, DELETE_TODO, EDIT_TODOS, GET_ALL_TODOS, CHANGE_STATUS_TODO } = require("../types/todoTypes")

export const addTodoAct = (text, email, login) => async (dispatch) => {
  try {
    const addedItem = await axios.post('http://localhost:3005/add', { text, email, login })
    dispatch(addTodo(addedItem.data))
  } catch (e) {
    console.log('error')
  }
}

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const editTodoAc = (id, text) => async (dispatch) => {
  try {
    const editted = await axios.post('http://localhost:3005/edit', { id, text })
    console.log(editted.data)
    dispatch(editTodo(editted.data));
  } catch (e) {
    console.log('error')
  }
}

export const editTodo = (edittedObj) => {
  return {
    type: EDIT_TODOS,
    payload: edittedObj
  }
}

export const getTodosAct = () => async (dispatch) => {
  try {
    const allTodos = await axios.get('http://localhost:3005/all')
    dispatch(getTodos(allTodos.data))
  } catch (e) {
    console.log('error')
  }
}

export const getTodos = (arrOfTodos) => {
  return {
    type: GET_ALL_TODOS,
    payload: arrOfTodos
  }
}

export const deleteTodoAct = (id) => async (dispatch) => {
  try {
    const deletedEl = await axios.post('http://localhost:3005/del', { id })
    dispatch(deleteTodo(id))
  } catch (e) {
    console.log('error')
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const changeStatusAct = (id) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3005/status', { id })
    dispatch(changeStatus(id))
  } catch (e) {
    console.log('err')
  }
}

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS_TODO,
    payload: id
  }
}
