import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import * as Config from '../config/config';


let AddTodo = ({date,todos,addToDo}) => {

  let input

  return (
    <div>
      <form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addToDo(input.value);
        input.value = ''
      }}>
        <input id="addtodo" placeholder="Add todo..." ref={node => {
          input = node
        }} />
        <button type="submit">
          +
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    date:Config.NOW_DATE,
    todos:state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (value) => {
      dispatch(addTodo(value))
    }
  }
}

AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodo)

export default AddTodo
