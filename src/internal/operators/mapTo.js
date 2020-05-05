export function mapTo(value) {
  return function mapToOperator(ins) {
    return ins.mapTo(value)
  }
}
