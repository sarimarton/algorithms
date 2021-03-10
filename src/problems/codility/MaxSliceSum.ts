// @ts-nocheck

// There is a simple sum aggregation which gets reset when a new element is
// greater in itself than the aggregation, so it's kind of biased towards to
// start a new slice aggregation whenever the condition fits. This condition is
// actually the same as checking if the aggregated value goes below zero or
// not. Then another aggregator simply keeps track of the max of the other one.
function solution(A) {
  let maxEndingHere = 0
  let maxSoFar = 0

  for (let i = 0; i < A.length; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}

