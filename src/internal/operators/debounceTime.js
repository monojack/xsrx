import debounce from 'xstream/extra/debounce'

export function debounceTime(dueTime) {
  return function debounceTimeOperator(ins) {
    return ins.compose(debounce(dueTime))
  }
}
