let cols = 'abcdefgh'
let rows = '12345678'

function gameNotationToCoord(square: string) {
  return {
    col: cols.indexOf(square[0]),
    row: rows.indexOf(square[1])
  }
}

type Square = {
  col: number
  row: number
}

function coordToGameNotation(square: Square) {
  return cols[square.col] + rows[square.row]
}

function isValidSquare(square: Square) {
  return (
    square.col >= 0 && square.col <= 7 && square.row >= 0 && square.row <= 7
  )
}

export function getAllMovesKnight(square: string) {
  let { col, row } = gameNotationToCoord(square)

  let moves = [
    [col + 1, row - 2],
    [col + 2, row - 1],
    [col + 2, row + 1],
    [col + 1, row + 2],
    [col - 1, row + 2],
    [col - 2, row + 1],
    [col - 2, row - 1],
    [col - 1, row - 2]
  ].map(([col, row]) => ({ col, row }))

  return moves.filter(isValidSquare).map(coordToGameNotation)
}


import { Vertex } from 'src/algorithms/types'

import * as bfs from 'src/algorithms/bfs'
import * as dfsr from 'src/algorithms/dfs-req'
import * as dfsi from 'src/algorithms/dfs-iter'

let algorithms = { ...bfs, ...dfsr, ...dfsi }

function getPath(
  src: Vertex,
  dest: Vertex,
  getAdjacencies: Function,
  algorithm: Function
) {
  return algorithm(src, (vertex: Vertex) => vertex === dest, getAdjacencies)
}

let src = 'a1'
let dest = 'c3'

// shortest path
console.log(getPath(src, dest, getAllMovesKnight, algorithms.bfs))

// recursive dfs - goes around the board
console.log(getPath(src, dest, getAllMovesKnight, algorithms.dfsRecursive))

// iterative dfs - also goes around but in opposite direction
console.log(getPath(src, dest, getAllMovesKnight, algorithms.dfsIterative))
