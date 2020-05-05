import flattenConcurrentlyAtMost from 'xstream/extra/flattenConcurrentlyAtMost'
import flattenConcurrently from 'xstream/extra/flattenConcurrently'

export function mergeMap(project, concurrent) {
  return function mergeMapOperator(ins) {
    return concurrent != null
      ? ins.map(project).compose(flattenConcurrentlyAtMost(concurrent))
      : ins.map(project).compose(flattenConcurrently())
  }
}
