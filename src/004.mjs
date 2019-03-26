import { timer } from './timer'

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

asyncForEach([100, 300, 200], async delay => {
  await timer(delay)
})
