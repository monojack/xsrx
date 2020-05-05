export function tap(...args) {
  return function tapOperator(ins) {
    return ins.debug(...args)
  }
}
