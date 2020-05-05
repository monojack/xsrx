import { map } from './map'

function plucker(properties) {
  return function project(obj) {
    function prop([name, ...props]) {
      return data => {
        const current = data[name]
        if (typeof current === 'undefined') return

        if (props.length > 0) {
          return prop(props)(current)
        }
        return current
      }
    }

    return prop(properties)(obj)
  }
}

export function pluck(...properties) {
  return function pluckOperator(source) {
    return properties.length === 0 ? source : map(plucker(properties))(source)
  }
}
