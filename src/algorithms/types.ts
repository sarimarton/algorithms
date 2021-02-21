export type Vertex = string

export type GraphTraverseFn = (
  src: Vertex,
  stopCondtion: (vertex: Vertex) => Boolean,
  getAdjacencies: (vertex: Vertex) => Vertex[]
) => string[] | null

export type ArrayItemPredicate = (idx: number, arr: number[]) => boolean
