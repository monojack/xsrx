export function startWith(value) {
  return function startWithOperator(ins) {
    return ins.startWith(value)
  }
}

// TODO: should be able to take an array of values to start with
// https://rxjs.dev/api/operators/startWith
