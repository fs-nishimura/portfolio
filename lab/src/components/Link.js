import React from 'react'
import PropTypes from 'prop-types';


const Link = ({ active, index, children, onClick }) => {

  return (
    <a className={"arrow isShowall-" + active}
    href="#"
    onClick={e => {
      e.preventDefault()
      onClick(active,index)
    }}
    >
    {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
