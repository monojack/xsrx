import xsBuffer from 'xstream/extra/buffer'

export function buffer(count) {
  return function bufferOperator(ins) {
    return ins.compose(xsBuffer(count))
  }
}
