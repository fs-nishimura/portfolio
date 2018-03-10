import * as Config from '../config/config'


let nextTodoId = Config.nextTodoIdDefault();
export const renderMarkdown = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}


export const dragStart = (id) => {
  return {
    type: 'SET_DRAGGING',
    dragging:true,
    dragging_id:id
  }
}


export const dragEnd = (date,id) => {
  return{
    type: 'COMPLETE_DRAG',
    dragging:false,
    date:date,
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter,index) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter:filter,
    index:index
  }
}
