import split from 'xstream/extra/split'

export function window(windowBoundaries) {
  return function windowOperator(ins) {
    return ins.compose(split(windowBoundaries))
  }
}
