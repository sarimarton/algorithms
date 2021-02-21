import { ArrayItemPredicate } from "./types"

export function binarySearch(
  sortedArray: number[],
  elementOrPredicate: number | ArrayItemPredicate,
  compare: ArrayItemPredicate = (idx, arr) => arr[idx] >= elementOrPredicate
): number {
  let left = 0
  let right = sortedArray.length - 1

  const found: ArrayItemPredicate =
    typeof elementOrPredicate === "function"
      ? elementOrPredicate
      : (idx, arr) => arr[idx] === elementOrPredicate

  while (left <= right) {
    const mid = (left + right) >> 1

    if (found(mid, sortedArray)) {
      return mid
    }

    if (compare(mid, sortedArray)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
