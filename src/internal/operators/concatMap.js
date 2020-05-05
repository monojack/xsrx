import flattenSequentially from 'xstream/extra/flattenSequentially'

export function concatMap(project) {
  return function concatMapOperator(ins) {
    return ins.map(project).compose(flattenSequentially())
  }
}
