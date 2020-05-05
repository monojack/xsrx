export function share() {
  return function shareOperator(ins) {
    return ins.remember()
  }
}
