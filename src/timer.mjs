export function timer (delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`timer ${delay}ms`)
      resolve(delay)
    }, delay)
  })
}
