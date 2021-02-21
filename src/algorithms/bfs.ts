import { Vertex, GraphTraverseFn } from './types'

// @ts-ignore
export let bfsBase: GraphTraverseFn = (src, visit, getAdj) => {
  let vertex = src
  let queue = [vertex]
  let visited = new Map<Vertex, boolean>()
  let backtrace = new Map<Vertex, Vertex>()
  let success = false

  // @ts-ignore
  while (queue.length > 0 && visit(vertex) !== STOP) {
    visited.set(vertex, true)

    for (let adj of getAdj(vertex)) {
      if (!visited.get(vertex)) {
        // visited.set(adj, true) <-- same shortest path, but opposite direction
        backtrace.set(adj, vertex)
        queue.push(adj)
      }
    }

    vertex = queue.shift()!
  }
}

export let bfs: GraphTraverseFn = (src, stopCond, getAdj) => {
  let vertex = src
  let queue = [vertex]
  let visited = new Map<Vertex, boolean>()
  let backtrace = new Map<Vertex, Vertex>()
  let success = false

  while (queue.length > 0) {
    vertex = queue.shift()!

    if (stopCond(vertex)) {
      success = true
      break
    }

    let unvisitedAdj = getAdj(vertex).filter((vertex) => !visited.get(vertex))

    visited.set(vertex, true)
    for (let adj of unvisitedAdj) {
      // visited.set(adj, true) <-- same shortest path, but opposite direction
      backtrace.set(adj, vertex)
    }

    queue.push(...unvisitedAdj)
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
