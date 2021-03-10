// @ts-nocheck

// Aggregate the minimum price in O(N)
// Max profit at a given point is max(maxProfit, currentPrice - minPrice)
function solution(A) {
  let minPrice = Infinity
  let maxProfit = 0

  let i = 0
  while (i < A.length) {
    minPrice = Math.min(minPrice, A[i])
    maxProfit = Math.max(maxProfit, A[i] - minPrice)
    i++
  }

  return maxProfit
}
