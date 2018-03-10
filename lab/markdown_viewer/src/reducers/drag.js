const drag = (state = null, action) => {
  switch (action.type) {
    case 'SET_DRAGGING':
      return action.dragging_id
    default:
      return state
  }
}

export default drag
