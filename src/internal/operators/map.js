export function map(project) {
  return function mapOperator(ins) {
    return ins.map(project)
  }
}
