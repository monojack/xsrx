export function catchError(selector) {
  return function catchErrorOperator(ins) {
    return ins.replaceError(selector)
  }
}
