import { timer } from './timer'

const result = [100, 300, 200].map(async delay => await timer(delay))
console.log(result)
