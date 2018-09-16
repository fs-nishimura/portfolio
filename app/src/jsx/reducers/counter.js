// Constants
export const INCREMENT = 'counter/increment'

// Action Creators
export function increment() {
  return {
    type: INCREMENT,
  }
}

const initialState = {
  value: 0,
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}
