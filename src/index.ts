

import solution from './problems/leetcode/rotated-sorted-array'
// debugger

// console.assert is silent when successful
console.assert(solution([], 0) === -1)
console.assert(solution([0], 0) === 0)
console.assert(solution([0,1], 0) === 0)
console.assert(solution([0,1,2], 0) === 0)
console.assert(solution([4,5,6,7,8,9], 9) === 5)
console.assert(solution([4,5,0,1], 3) === -1)
console.assert(solution([4,5,0,1,2,3], 0) === 2)
console.assert(solution([4, 5, 0, 1, 2, 3], 5) === 1)
