import sampleCombine from 'xstream/extra/sampleCombine'

export function withLatestFrom(...args) {
  return function withLatestFromOperator(ins) {
    return ins.compose(sampleCombine(...args))
  }
}
