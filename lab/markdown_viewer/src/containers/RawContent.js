import React from 'react'
import { connect } from 'react-redux'
import { renderMarkdown } from '../actions'
import * as Config from '../config/config';

let RawContent = ({text,renderMarkdown}) => {

  let input

  return (
    <div>
      <form
      onKeyDown={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        renderMarkdown(input.value);
        input.value = ''
      }}>
        <textarea id="raw" placeholder="Enter markdown" ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text:state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderMarkdown: (value) => {
      dispatch(renderMarkdown(value))
    }
  }
}

RawContent = connect(mapStateToProps,mapDispatchToProps)(RawContent)

export default RawContent
