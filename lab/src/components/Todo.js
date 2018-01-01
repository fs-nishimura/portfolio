import React from 'react'
import PropTypes from 'prop-types';


const Todo = ({ completed, text, id,date,onClick, onTodoDragStart,onTodoDragEnd}) => (
  <li
  className={"todos-list-el " + "completed-" + completed}　
  >
  <input type="checkbox" onClick={onClick} />
  <span draggable='true' onDragStart={onTodoDragStart.bind(this, id)}>{text}</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  date:PropTypes.string.isRequired
}

export default Todo
