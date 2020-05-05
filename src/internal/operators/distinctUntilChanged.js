import dropRepeats from 'xstream/extra/dropRepeats'

export function distinctUntilChanged(compare) {
  return function distinctUntilChangedOperator(ins) {
    return ins.compose(dropRepeats(compare))
  }
}
