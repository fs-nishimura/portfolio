

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })

    case 'COMPLETE_DRAG':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        date: action.date
      })
    default:
    return state
  }
}

let todosDefault = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = todosDefault, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action)
    ]
    case 'TOGGLE_TODO':
    case 'COMPLETE_DRAG':
      return state.map(t =>
        todo(t, action)
      )
    default:
    return state
  }
}

export default todos
