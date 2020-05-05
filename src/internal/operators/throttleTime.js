import throttle from 'xstream/extra/throttle'

export function throttleTime(duration) {
  return function throttleTimeOperator(ins) {
    return ins.compose(throttle(duration))
  }
}
