import Stream from 'xstream'

export function BehaviorSubject(initialValue) {
  const subject = Object.assign(Stream.createWithMemory(), {
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

  subject.next(initialValue)
  return subject
}
