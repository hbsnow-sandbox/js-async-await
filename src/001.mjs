import { timer } from './timer'
;[100, 300, 200].forEach(async delay => {
  await timer(delay)
})
