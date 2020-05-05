export function scan(accumulator, seed) {
  return function scanOperator(ins) {
    return ins.fold(accumulator, seed)
  }
}
