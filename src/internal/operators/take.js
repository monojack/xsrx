export function take(count) {
  return function takeOperator(ins) {
    return ins.take(count)
  }
}
