import { connect } from 'react-redux'
import { toggleTodo,dragStart,dragEnd } from '../actions'
import TodoLists from '../components/TodoLists'


const mapStateToProps = (state) => {
  return {
    drag:state.drag,
    visibilityFilters:state.visibilityFilters,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onTodoDragStart:(id,e)=>{
      e.stopPropagation()
      dispatch(dragStart(id))
    },
    onTodoDragEnd:(date,id,e)=>{
      e.stopPropagation()
      dispatch(dragEnd(date,id))
    },
    onTodoDragOver: (e) => {
      e.preventDefault();
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default VisibleTodoList
