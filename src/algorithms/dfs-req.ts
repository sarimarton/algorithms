import { Vertex, GraphTraverseFn } from './types'

export let dfsRecursive: GraphTraverseFn = (src, stopCond, getAdj) => {
  let visited = new Map<Vertex, boolean>()
  let backtrace = new Map<Vertex, Vertex>()
  let lastVertex: Vertex | null = null

  function helper(vertex: Vertex) {
    visited.set(vertex, true)

    if (stopCond(vertex)) {
      lastVertex = vertex
      return
    }

    let adjacencies = getAdj(vertex)

    for (let adj of adjacencies) {
      if (!visited.get(adj)) {
        helper(adj)
        backtrace.set(adj, vertex)
      }
    }
  }

  helper(src)

  if (lastVertex === null) {
    return null
  } else {
    let vertex = lastVertex!
    let result = [vertex]

    while (vertex !== src) {
      vertex = backtrace.get(vertex)!
      result.unshift(vertex)
    }

    return result
  }
}

