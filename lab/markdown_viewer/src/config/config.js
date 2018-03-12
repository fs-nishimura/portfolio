import moment from 'moment'

export const DAYS = 3
export const DATE_FORMAT = 'YYYY/MM/DD'
export const NOW = moment()
export const NOW_DATE = NOW.format(DATE_FORMAT)

export const DAY_OPTIONS = () => {
  const arr = []
  ;[...Array(DAYS)].map((x, i) => {
    arr.push(
      moment()
        .add(i, 'days')
        .format(DATE_FORMAT)
    )
  })
  return arr
}

export var nextTodoIdDefault = () => {
  const currentTodo = JSON.parse(localStorage.getItem('todos')) || []
  let nextTodoIdDefault = currentTodo.length
    ? Math.max.apply(
        Math,
        currentTodo.map(o => {
          return o.id
        })
      )
    : 0
  nextTodoIdDefault++
  return nextTodoIdDefault
}
