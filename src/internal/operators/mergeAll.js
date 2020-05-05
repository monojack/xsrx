import flattenConcurrentlyAtMost from 'xstream/extra/flattenConcurrentlyAtMost'
import flattenConcurrently from 'xstream/extra/flattenConcurrently'

export function mergeAll(concurrent) {
  return function mergeAllOperator(ins) {
    return concurrent != null
      ? ins.compose(flattenConcurrentlyAtMost(concurrent))
      : ins.compose(flattenConcurrently())
  }
}
