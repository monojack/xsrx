import Stream from 'xstream'

export function Subject() {
  return Object.assign(Stream.create(), {
    next(v) {
      this.shamefullySendNext(v)
    },
    error(v) {
      this.shamefullySendError(v)
    },
    complete() {
      this.shamefullySendComplete()
    },
  })
}
