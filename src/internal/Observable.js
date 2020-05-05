import Stream from 'xstream'

export function Observable(subscribe) {
  return Stream.create({
    start(subscriber) {
      this.teardown = subscribe(subscriber)
    },
    stop() {
      this.teardown()
    },
  })
}
