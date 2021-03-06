// https://leetcode.com/problems/search-in-rotated-sorted-array/

import { binarySearch } from "../../algorithms/binarysearch-iter"
// import { binarySearch } from '../../algorithms/binarysearch-req'

export default function solution(nums: number[], target: number) {
  const rotateIdx = (idx: number, offset: number, size: number) =>
    idx + offset - size * +(idx + offset >= size)

  const offset =
    binarySearch(
      nums,
      (idx, arr) => arr[idx + 1] < arr[idx],
      (idx, arr) => arr[idx] < nums[0]
    ) + 1

  const proxyArray = new Proxy(nums, {
    get: (target, prop) =>
      isNaN(Number(prop))
        ? Reflect.get(target, prop)
        : target[rotateIdx(Number(prop), offset, target.length)],
  })

  const sortedIdx = binarySearch(proxyArray, target)

  return sortedIdx === -1 ? -1 : rotateIdx(sortedIdx, offset, nums.length)
}

console.assert(solution([], 0) === -1)
console.assert(solution([0], 0) === 0)
console.assert(solution([0, 1], 0) === 0)
console.assert(solution([0, 1, 2], 0) === 0)
console.assert(solution([4, 5, 6, 7, 8, 9], 9) === 5)
console.assert(solution([4, 5, 0, 1], 3) === -1)
console.assert(solution([4, 5, 0, 1, 2, 3], 0) === 2)
console.assert(solution([4, 5, 0, 1, 2, 3], 5) === 1)
