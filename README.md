## xsrx

Pipeable operators for `xstream`, with `rxjs` compatibility layer.

<br/>

**Reason**: Being an avid `rxjs` user I want to be able to use `xstream's` hot streams without having to "switch" to a different syntax. As a bonus: if I ever want to refactor to `rxjs` I'd only have to replace the imports.

_NOTE:_ Does **NOT** convert from `xstream` to `rxjs`, so even though you wouldn't have to go through all your codebase to change operator names and from dot[.]chaining to piping, you might still have to deal with the fact that you're switching from hot to cold observables.

**TL;DR**

```js
xs.periodic(1000)
  .mapTo(1)
  .fold((acc, c) => acc + c, 1)
  .map(id =>
    xs.from(
      fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json()),
    ),
  )
  .flatten()
  .map(data => data.name)

// to
interval(1000).pipe(
  mapTo(1),
  scan((acc, c) => acc + c, 1),
  switchMap(id =>
    from(fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json())),
  ),
  pluck('name'),
)

// or using the pipeline operator
// https://github.com/tc39/proposal-pipeline-operator
interval(1000)
  |> mapTo(1)
  |> scan((acc, c) => acc + c, 1)
  |> switchMap(id =>
    from(fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json())),
  )
  |> pluck('name')

// and it's still an `xstream` Stream
```

_Imports are the same as in `rxjs`_

```js
import { interval } from 'xs.rx'
import { mapTo, scan, switchMap, pluck } from 'xs.rx/operators'
```
