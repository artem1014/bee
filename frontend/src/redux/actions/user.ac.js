import { DELETE_USER, SET_USER } from "../types/userTypes"

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const deleteUser = () => ({
  type: DELETE_USER
})

export const signInStart = (payload, history, from) => async (dispatch) => {
  const response = await fetch('http://localhost:3005/signin', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
    history.replace(from);
  } else {
    alert('Данные введены некорректно')
  }
}

export const signOutStart = () => async (dispatch) => {
  const response = await fetch('http://localhost:3005/signout', {
    credentials: 'include'
  })
  if (response.status === 200) {
    dispatch(deleteUser())
  }
}

export const checkAuthStart = () => async (dispatch) => {
  const response = await fetch('http://localhost:3005/check', {
    credentials: 'include'
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  }
}


