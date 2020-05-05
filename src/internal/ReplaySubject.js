import Stream from 'xstream'

export function ReplaySubject() {
  if (arguments.length > 1 || (arguments.length === 0 && arguments[0] !== 1)) {
    throw Error(
      `Because of how xstream's MemoryStream works only ReplaySubject(1) is currently supported`,
    )
  }

  return Object.assign(Stream.createWithMemory(), {
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
