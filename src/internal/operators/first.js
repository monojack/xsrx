export function first(predicate) {
  return function firstOperator(ins) {
    return predicate && typeof predicate === 'function'
      ? ins.filter(predicate).take(1)
      : ins.take(1)
  }
}
