export function skip(count) {
  return function skipOperator(ins) {
    return ins.drop(count)
  }
}
