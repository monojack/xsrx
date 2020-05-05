import Stream from 'xstream'

export function throwError(...args) {
  return Stream.throw(...args)
}
