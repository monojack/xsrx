export function ignoreElements() {
  return function ignoreElementsOperator(ins) {
    return ins.filter(() => false)
  }
}
