export function filter(predicate) {
  return function filterOperator(ins) {
    return ins.filter(predicate)
  }
}
