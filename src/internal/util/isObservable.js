import Stream from 'xstream'
import $$observable from 'symbol-observable' // this should be xstream's dependency

export function isObservable(obj) {
  return (
    !!obj &&
    (obj instanceof Stream ||
      (typeof obj[$$observable] === 'function' &&
        obj[$$observable]() === obj) ||
      typeof obj.subscribe === 'function')
  )
}
