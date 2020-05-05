import Stream from 'xstream'

export function combineLatest(...args) {
  return Stream.combine(...args)
}
