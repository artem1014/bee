const { ADD_TODO, DELETE_TODO, GET_ALL_TODOS, CHANGE_STATUS_TODO, EDIT_TODOS } = require("../types/todoTypes");

const todoReducer = (state = [], action) => {

  switch (action.type) {
    case ADD_TODO:
      {
        return [...state, action.payload]
      }

    case EDIT_TODOS:
      {
        return (state.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              text: action.payload.text
            }
          }
          return el
        }))
      }

    case GET_ALL_TODOS:
      {
        return action.payload
      }

    case DELETE_TODO:
      {
        return state.filter(el => el.id != action.payload)
      }

    case CHANGE_STATUS_TODO:
      {
        return (state.map(el => {
          if (el.id === action.payload) {
            return {
              ...el,
              status: !el.status
            }
          }
          return el
        }))
      }

    default:
      return state
  }
}

export default todoReducer
