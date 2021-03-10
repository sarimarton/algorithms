// @ts-nocheck
export default function solution(blocks) {
  let maxDistance = 2
  let tail1 = 0
  let tail2 = 0

  let state = "down"

  for (let i = 0; i < blocks.length; i++) {
    if (i === 0) continue

    if (state === "down") {
      if (blocks[i] > blocks[i - 1]) {
        state = "up"
        tail1 = i
        continue
      }
    }

    if (state === "up") {
      if (blocks[i] > blocks[i - 1]) {
        state = "down"
        tail2 = i
        continue
      }
    }

    maxDistance = Math.max(maxDistance, i - tail1 + 1)
    maxDistance = Math.max(maxDistance, i - tail2 + 1)
  }

  return maxDistance
}

solution([2, 6, 8, 5])




// new Map([
//   [[2, 6, 8, 5], 3],
//   [[1, 5, 5, 2, 6], 4],
//   [[1, 1], 2],
//   // [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
//   // [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
//   // [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
//   // [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
//   // [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
//   // [[-5, -3, -3, -3, -2, -1, 0, 0, 4, 4], 0],
// ]).forEach((result, input) => {
//   console.assert(solution(input) === result, 'fail')
//   // if (mysolution(input) !== solution(input)) {
//   //   console.log(input, solution(input))
//   //   // debugger
//   //   console.log(input, mysolution(input))
//   // }
// })
