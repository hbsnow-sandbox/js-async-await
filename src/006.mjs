import { timer } from './timer'
;[100, 300, 200].reduce(async (accumulator, delay) => {
  await accumulator
  return timer(delay)
}, Promise.resolve())
