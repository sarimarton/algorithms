import { ArrayItemPredicate } from "./types"

export function binarySearch(
  sortedArray: number[],
  elementOrPredicate: number | ArrayItemPredicate,
  compare: ArrayItemPredicate = (idx, arr) => arr[idx] >= elementOrPredicate,
  left = 0,
  right = sortedArray.length - 1
): number {
  const found: ArrayItemPredicate =
    typeof elementOrPredicate === 'function'
      ? elementOrPredicate
      : (idx, arr) => arr[idx] === elementOrPredicate

  if (left > right) {
    return -1
  }

  const mid = left + ((right - left) >> 1)

  return found(mid, sortedArray)
    ? mid
    : compare(mid, sortedArray)
      ? binarySearch(sortedArray, elementOrPredicate, compare, left, mid - 1)
      : binarySearch(sortedArray, elementOrPredicate, compare, mid + 1, right)
}
