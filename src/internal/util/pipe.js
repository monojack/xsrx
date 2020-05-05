import { identity } from './identity'

export function pipe(...operators) {
  if (operators.length === 0) {
    return identity
  }

  if (operators.length === 1) {
    return operators[0]
  }

  return function piped(source) {
    return operators.reduce((prev, operator) => operator(prev), source)
  }
}
