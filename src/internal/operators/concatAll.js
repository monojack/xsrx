import flattenSequentially from 'xstream/extra/flattenSequentially'

export function concatAll() {
  return function concatAllOperator(ins) {
    return ins.compose(flattenSequentially())
  }
}
