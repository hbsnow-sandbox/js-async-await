import { timer } from './timer'
;(async () => {
  for (const delay of [100, 300, 200]) {
    await timer(delay)
  }
})()
