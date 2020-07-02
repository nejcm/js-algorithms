export type ToStringCallback<T> = (current: T, index: number) => string;
export type Meta = {[key: string]: unknown};
export interface Options {
  directed?: boolean;
}
export type Edge = {
  weight?: number;
  // could add start and end vertex
  [key: string]: unknown;
};
export interface Vertex<T> {
  meta: Meta;
  edges: Map<T, Edge>;
}

export interface Graph<T> {
  vertices: Map<T, Vertex<T>>;
  directed: boolean;
  addVertex(
    this: Graph<T>,
    value: T,
    meta?: Meta,
    edges?: [T, Edge?][],
  ): Graph<T>;
  deleteVertex(this: Graph<T>, value: T): boolean;
  addEdge(this: Graph<T>, start: T, end: T, weight?: number): boolean;
  deleteEdge(this: Graph<T>, start: T, end: T): boolean;
  getEdge(this: Graph<T>, start: T, end: T): Edge | undefined;
  hasEdge(this: Graph<T>, start: T, end: T): boolean;
  getWeight(this: Graph<T>): number;
  getNeighbors(this: Graph<T>, value: T): [T, Edge][] | undefined;
  getVertex(this: Graph<T>, value: T): Vertex<T> | undefined;
  hasVertex(this: Graph<T>, value: T): boolean;
  getAllVertices(this: Graph<T>): Vertex<T>[];
  toString(this: Graph<T>, separator?: string): string;
}

const graph = <T>(options?: Options): Graph<T> => {
  const graphObj: Graph<T> = {
    vertices: new Map<T, Vertex<T>>(),
    directed: options?.directed || false,

    // add vertex
    addVertex: function addVertex(value, meta = {}, edges = []) {
      const vertexEdges = edges.map((edge) => [
        edge.shift(),
        edge.shift() || {},
      ]) as [T, Edge][];
      this.vertices.set(value, {
        meta,
        edges: new Map(vertexEdges),
      });
      return this;
    },

    // delete vertex
    // this will delete also all connected edges
    deleteVertex: function deleteVertex(value) {
      const exists = this.vertices.has(value);
      // if vertex does not exist
      if (!exists) return false;
      // delete all connected edges
      this.vertices.forEach((vertex) => {
        vertex.edges.delete(value);
      });
      // delete vertex
      this.vertices.delete(value);
      return true;
    },

    // get all vertices
    getAllVertices: function getAllVertices() {
      return [...this.vertices.values()];
    },

    // get vertex
    getVertex: function getVertex(value) {
      return this.vertices.get(value);
    },

    // has vertex
    hasVertex: function hasVertex(value) {
      return !!this.vertices.get(value);
    },

    // add edge
    addEdge: function addEdge(start, end, weight = 0) {
      const startVertex = this.vertices.get(start);
      const endVertex = this.vertices.get(end);
      // vertices do not exist
      if (!startVertex || !endVertex) return false;

      // add edge
      // if exists it updates the weight
      startVertex.edges.set(end, {weight});
      // if undirected add backwards connection
      if (!this.directed) {
        endVertex.edges.set(start, {weight});
      }
      return true;
    },

    // delete edge
    deleteEdge: function deleteEdge(start, end) {
      const startVertex = this.vertices.get(start);
      const endVertex = this.vertices.get(end);
      // vertices do not exist
      if (!startVertex || !endVertex) return false;

      // delete edge
      startVertex.edges.delete(end);
      // if undirected delete backwards connection
      if (!this.directed) {
        endVertex.edges.delete(start);
      }
      return true;
    },

    // get edge
    getEdge: function getEdge(start, end) {
      const startVertex = this.vertices.get(start);
      const endVertex = this.vertices.get(end);
      // check if both exist
      if (!startVertex || !endVertex) return undefined;
      // get start->end edge
      return startVertex.edges.get(end);
    },

    // has edge
    hasEdge: function hasEdge(start, end) {
      return !!this.getEdge(start, end);
    },

    // get sum of all edge weights
    getWeight: function getWeight() {
      // for each vertex sum all edge weights
      return this.getAllVertices().reduce(
        (total, vertex) =>
          total +
          [...vertex.edges.values()].reduce(
            (vertexTotal, edge) => vertexTotal + (edge.weight || 0),
            0,
          ),
        0,
      );
    },

    // get array of all neighbors
    // or undefined if vertex does not exists
    getNeighbors: function getNeighbors(value) {
      const values = this.vertices.get(value)?.edges.entries();
      // if vertex does not exist
      if (!values) return undefined;
      // return all vertex edges
      return [...values];
    },

    // print graph
    toString: function toString(separator = ', ') {
      return [...this.vertices.keys()].join(separator);
    },
  };

  return graphObj;
};

export default graph;
