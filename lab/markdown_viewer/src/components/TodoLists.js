import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'
import Filter from './Filter'
import * as Config from '../config/config'


const getVisibleTodos = (todos, visibilityFilters, index, date) => {
  switch (visibilityFilters[index].filter) {
    case 'SHOW_ALL':
      return todos.filter(t => (t.date == date))
    case 'SHOW_COMPLETED':
      return todos.filter(t => (t.completed && t.date == date))
    case 'SHOW_ACTIVE':
      return todos.filter(t => (!t.completed && t.date == date))
  }
}

const TodoLists = ({ drag, todos, visibilityFilters, onTodoClick, onTodoDragOver, onTodoDragStart, onTodoDragEnd  }) =>(
  <div className="todos wrapper">
  {
    Config.DAY_OPTIONS().map((date, i) =>
    <div className="todos-list" key={'todos' + i}>
    <h2 onDragOver={onTodoDragOver} onDrop={onTodoDragEnd.bind(this, date,drag)}>{date.split("/").slice(1).map((el, j) =>{
        let dateStr="";
        let divider = j<date.split("/").slice(1).length-1 && <span id={"divider" + i} className="divider">/</span>;
        return (<span key={j}>{el}{divider}</span>)
        })}</h2>
        <ul>
        {Todos(getVisibleTodos(todos,visibilityFilters,i,date),onTodoClick,onTodoDragStart)}
        </ul>
        <Filter index={i} />
        </div>
      )
    }
    </div>
  )

  const Todos = (todos,onTodoClick,onDragStart,onDragEnd)=>{
    return todos.map(todo =>
      <Todo
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id,todo.date)}
      onTodoDragStart={(id,e) =>{onDragStart(todo.id,e)}}
      />
    )
  }

  TodoLists.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  export default TodoLists
