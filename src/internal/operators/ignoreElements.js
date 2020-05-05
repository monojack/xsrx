import xs from 'xstream'
import dropUntil from 'xstream/extra/dropUntil'

export function ignoreElements() {
  return function ignoreElementsOperator(ins) {
    return ins.compose(dropUntil(xs.never()))
  }
}
