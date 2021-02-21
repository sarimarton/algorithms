import { Vertex, GraphTraverseFn } from './types'

export let dfsIterative: GraphTraverseFn = (src, stopCond, getAdj) => {
  let vertex = src
  let stack = [vertex]
  let visited = new Map<Vertex, boolean>()
  let backtrace = new Map<Vertex, Vertex>()
  let success = false

  while (stack.length > 0) {
    vertex = stack.pop()!

    if (stopCond(vertex)) {
      success = true
      break
    }

    let unvisitedAdj = getAdj(vertex).filter((vertex) => !visited.get(vertex))

    visited.set(vertex, true)
    for (let adj of unvisitedAdj) {
      // visited.set(adj, true) // <-- this generates a different path
      backtrace.set(adj, vertex)
    }
 
    stack.push(...unvisitedAdj)
  }

  if (!success) {
    return null
  } else {
    let result = [vertex]

    while (vertex !== src) {
      vertex = backtrace.get(vertex)!
      result.unshift(vertex)
    }

    return result
  }
}
