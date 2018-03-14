// Constants
export const INCREMENT = 'counter/increment'

// Action Creators
export function increment() {
  return {
    type: INCREMENT,
  }
}

// Reducer
export default (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, value: state.value + 1 }
    }
    default: {
      return state
    }
  }
}
