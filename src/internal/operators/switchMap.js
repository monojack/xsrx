export function switchMap(project) {
  return function switchMapOperator(ins) {
    return ins.map(project).flatten()
  }
}
