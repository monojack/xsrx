export function last(predicate) {
  return function lastOperator(ins) {
    return predicate && typeof predicate === 'function'
      ? ins.filter(predicate).last()
      : ins.last()
  }
}
