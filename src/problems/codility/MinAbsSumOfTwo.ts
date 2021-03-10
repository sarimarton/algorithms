// @ts-nocheck
export default function solution(A) {
  var positives = []
  var negatives = []
  var i = 0
  var min = 0

  var start = 0
  var end = 0

  if (A.length === 1) {
    return Math.abs(A[0] + A[0])
  }

  A.sort(function (a, b) {
    return a - b
  })

  for (i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      negatives.push(A[i])
    } else {
      positives.push(A[i])
    }
  }

  negatives.sort(function (a, b) {
    return b - a
  })

  if (positives.length === 0) {
    return Math.abs(2 * negatives[0])
  }

  if (negatives.length === 0) {
    return 2 * positives[0]
  }

  if (positives[0] === 0) {
    return 0
  }

  min = positives[0] * 2

  for (i = 0; i < negatives.length; i++) {
    start = 0
    end = positives.length - 1
    var neg = A[i]

    while (start <= end) {
      var mid = parseInt((start + end) / 2)
      var pos = positives[mid]
      var sum = Math.abs(neg + pos)

      if (min > sum) min = sum

      if (pos > Math.abs(neg)) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }

  return min
}

function mysolution(A) {
  A.sort((a, b) => a - b)

  let left = 0
  let right = A.length - 1
  let minAbsSum = Math.abs(A[left] + A[right])

  while (left <= right) {
    let currentSum = A[left] + A[right]
    minAbsSum = Math.min(minAbsSum, Math.abs(currentSum))
    if (currentSum <= 0) left++
    else right--
  }

  return minAbsSum
}

new Map([
  [[0], 0],
  [[-1, 1], 0],
  [[-8, 3, 5], 3],
  [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
  [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
  [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
  [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
  [Array.from({ length: 40 }, () => Math.floor(Math.random() * 40) - 20), 0],
  [[-5, -3, -3, -3, -2, -1, 0, 0, 4, 4], 0],
]).forEach((result, input) => {
  // console.assert(solution(input), result)
  if (mysolution(input) !== solution(input)) {
    console.log(input, solution(input))
    // debugger
    console.log(input, mysolution(input))
  }
})
