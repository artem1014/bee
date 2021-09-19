const initState = {
  todos: [],
  user: null,
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('todos'))
  return stateFromLS ? stateFromLS : initState
}

export default getInitState
