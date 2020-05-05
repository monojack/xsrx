import xsPairwise from 'xstream/extra/pairwise'

export function pairwise() {
  return function pairwiseOperator(ins) {
    return ins.compose(xsPairwise)
  }
}
