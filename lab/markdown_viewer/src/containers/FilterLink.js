import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    index:ownProps.index,
    active: state.visibilityFilters[ownProps.index].filter == "SHOW_ALL"?true:false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (active,index) => {
      let filter = active?"SHOW_ACTIVE":"SHOW_ALL";
      dispatch(setVisibilityFilter(filter,index))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
