// @ts-nocheck

// function solution(arr) {
//   if (arr.length === 0) {
//     return [[]]
//   }
//   let head = arr[0]
//   let tail = solution(arr.slice(1))
//   return [...tail, ...tail.map((set) => [head, ...set])]
// }

function solution(arr) {
  return arr.length === 0
    ? [[]]
    : solution(arr.slice(1)).reduce(
        (acc, set) => [...acc, set, [arr[0], ...set]],
        []
      )
}

// console.log(solution([1, 2, 3, 4]))

export default solution
