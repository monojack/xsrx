import Stream from 'xstream'

export function interval(...args) {
  return Stream.periodic(...args)
}
