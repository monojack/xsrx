export function takeUntil(notifier) {
  return function takeUntilOperator(ins) {
    return ins.endWhen(notifier)
  }
}
