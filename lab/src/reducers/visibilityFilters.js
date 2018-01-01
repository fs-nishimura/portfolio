const visibilityFilter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      if (state.index !== action.index) {
        return state
      }
      return Object.assign({}, state, {
        filter: action.filter
      })
    default:
      return state
  }
}


const visibilityFiltersDefault=[
  {
    index:0,
    filter:'SHOW_ALL'
  },
  {
    index:1,
    filter:'SHOW_ALL'
  },
  {
    index:2,
    filter:'SHOW_ALL'
  }
]

const visibilityFilters = (state = visibilityFiltersDefault, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return state.map(t =>
        visibilityFilter(t, action)
      )
    default:
      return state
  }
}

export default visibilityFilters
