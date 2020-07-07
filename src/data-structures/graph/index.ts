export type Key = string | number;
export type ToStringCallback<T> = (
  key: Key,
  index: number,
  vertex: Vertex<T>,
) => string;
export interface Options {
  directed?: boolean;
}
export type Edge = {
  weight?: number;
  // could add start and end vertex
  [key: string]: unknown;
};
export interface Vertex<T> {
  value?: T;
  edges: Map<Key, Edge>;
}

export interface Graph<T> {
  vertices: Map<Key, Vertex<T>>;
  directed: boolean;
  addVertex(
    this: Graph<T>,
    key: Key,
    value?: T,
    edges?: [Key, Edge?][],
  ): Graph<T>;
  deleteVertex(this: Graph<T>, key: Key): boolean;
  addEdge(this: Graph<T>, start: Key, end: Key, weight?: number): boolean;
  deleteEdge(this: Graph<T>, start: Key, end: Key): boolean;
  getEdge(this: Graph<T>, start: Key, end: Key): Edge | undefined;
  hasEdge(this: Graph<T>, start: Key, end: Key): boolean;
  getWeight(this: Graph<T>): number;
  getNeighbors(this: Graph<T>, key: Key): [Key, Vertex<T>][] | undefined;
  getVertex(this: Graph<T>, key: Key): Vertex<T> | undefined;
  hasVertex(this: Graph<T>, key: Key): boolean;
  getAllVertices(this: Graph<T>): Vertex<T>[];
  isEmpty(this: Graph<T>): boolean;
  toString(
    this: Graph<T>,
    separator?: string,
    callback?: ToStringCallback<T>,
  ): string;
}

const graph = <T>(options?: Options): Graph<T> => {
  const graphObj: Graph<T> = {
    vertices: new Map<Key, Vertex<T>>(),
    directed: options?.directed || false,

    // add vertex
    addVertex: function addVertex(key, value, edges = []) {
      const vertexEdges = edges.map((edge) => [
        edge.shift(),
        edge.shift() || {},
      ]) as [Key, Edge][];
      this.vertices.set(key, {
        value,
        edges: new Map(vertexEdges),
      });
      return this;
    },

    // delete vertex
    // this will delete also all connected edges
    deleteVertex: function deleteVertex(key) {
      const exists = this.vertices.has(key);
      // if vertex does not exist
      if (!exists) return false;
      // delete all connected edges
      this.vertices.forEach((vertex) => {
        vertex.edges.delete(key);
      });
      // delete vertex
      this.vertices.delete(key);
      return true;
    },

    // get all vertices
    getAllVertices: function getAllVertices() {
      return [...this.vertices.values()];
    },

    // get vertex
    getVertex: function getVertex(key) {
      return this.vertices.get(key);
    },

    // has vertex
    hasVertex: function hasVertex(key) {
      return !!this.vertices.get(key);
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
    // or undefined if none exist
    getNeighbors: function getNeighbors(key) {
      const keys = this.vertices.get(key)?.edges.keys();
      // if vertex does not exist
      if (!keys) return undefined;
      // return all vertex edges
      return [...keys].map((k) => [k, this.vertices.get(k) as Vertex<T>]);
    },

    // print graph
    toString: function toString(separator = ', ', callback) {
      if (!callback) return [...this.vertices.keys()].join(separator);
      return [...this.vertices.entries()]
        .map((entry, i) => callback(entry[0], i, entry[1]))
        .join(separator);
    },

    // check if graph is empty
    isEmpty: function isEmpty() {
      return !this.vertices.size;
    },
  };

  return graphObj;
};

export default graph;
