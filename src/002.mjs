import { timer } from './timer'

let promiseChain = Promise.resolve()
;[100, 300, 200].forEach(delay => {
  promiseChain = promiseChain.then(() => timer(delay))
})
