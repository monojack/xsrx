import xsDelay from 'xstream/extra/delay'

export function delay(time) {
  return function delayOperator(ins) {
    return ins.compose(xsDelay(time))
  }
}
