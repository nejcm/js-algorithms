export type Key = string | number;
export type ToStringCallback<T> = (key: Key, index: number, vertex: Vertex<T>) => string;
export type AdjacencyMatrixCallback<T> = (vals: {
  start: number;
  end: number;
  startVertex: Vertex<T>;
  endVertex: Vertex<T>;
  edge?: Edge;
}) => void;
export interface Options {
  directed?: boolean;
}
export type Edge = {
  start: Key;
  end: Key;
  weight?: number;
  // could add start and end vertex
  [key: string]: unknown;
};
export interface Vertex<T> {
  key: Key;
  value?: T;
  edges: Map<Key, Edge>;
}

export interface Graph<T> {
  vertices: Map<Key, Vertex<T>>;
  directed: boolean;
  addVertex(this: Graph<T>, key: Key, value?: T): Vertex<T>;
  addVertices(this: Graph<T>, ...items: [Key, T?][]): Vertex<T>[];
  deleteVertex(this: Graph<T>, key: Key): boolean;
  addEdge(this: Graph<T>, start: Key, end: Key, weight?: number): boolean;
  deleteEdge(this: Graph<T>, start: Key, end: Key): boolean;
  getEdge(this: Graph<T>, start: Key, end: Key): Edge | undefined;
  hasEdge(this: Graph<T>, start: Key, end: Key): boolean;
  getEdges(this: Graph<T>, key: Key): Edge[] | undefined;
  getAllEdges(this: Graph<T>): Edge[];
  getWeight(this: Graph<T>): number;
  getNeighbors(this: Graph<T>, key: Key): [Key, Vertex<T>][] | undefined;
  getVertex(this: Graph<T>, key: Key): Vertex<T> | undefined;
  hasVertex(this: Graph<T>, key: Key): boolean;
  getAllVertices(this: Graph<T>): Vertex<T>[];
  getAdjacencyMatrix(this: Graph<T>, callback?: AdjacencyMatrixCallback<T>): number[][];
  reverse(this: Graph<T>): Graph<T>;
  isEmpty(this: Graph<T>): boolean;
  toString(this: Graph<T>, separator?: string, callback?: ToStringCallback<T>): string;
}

const graph = <T>(options?: Options): Graph<T> => {
  const graphObj: Graph<T> = {
    vertices: new Map<Key, Vertex<T>>(),
    directed: options?.directed || false,

    // add vertex
    // it will override value for an existing vertex
    addVertex: function addVertex(key, value) {
      // create new vertex
      const newVertex = {
        key,
        value,
        edges: new Map<Key, Edge>(),
      };
      this.vertices.set(key, newVertex);
      return newVertex;
    },

    // add vertices
    // it will override value for an existing vertex
    addVertices: function addVertices(...items) {
      const newVertices: Vertex<T>[] = [];
      items.forEach((item) => {
        newVertices.push(this.addVertex(item[0], item[1]));
      });
      return newVertices;
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
      let startVertex = this.vertices.get(start);
      let endVertex = this.vertices.get(end);

      // insert start vertex if it does not exist
      if (!startVertex) {
        startVertex = this.addVertex(start);
      }
      // insert end vertex if it does not exist
      if (!endVertex) {
        endVertex = this.addVertex(end);
      }

      // add edge
      // if exists it updates the weight
      startVertex.edges.set(end, {start, end, weight});
      // if undirected add backwards connection
      if (!this.directed) {
        endVertex.edges.set(start, {end: start, start: end, weight});
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

    // get array of all vertex edges
    // or undefined if vertex does not exist
    getEdges: function getEdges(key) {
      const vertex = this.vertices.get(key);
      // check if vertex exist
      if (!vertex) return undefined;
      return [...vertex.edges.values()];
    },

    // get all edges in graph
    getAllEdges: function getAllEdges() {
      const added = new Map<Key, boolean>();
      const idDirected = this.directed;
      return this.getAllVertices().reduce((all, vertex) => {
        // if directed then return all
        if (idDirected) {
          return [...all, ...vertex.edges.values()];
        }
        // if undirected then filter duplicates
        added.set(vertex.key, true);
        const edges = [...vertex.edges.values()].filter((edge) => {
          // is vertex already in added
          return !added.has(edge.end);
        });
        return [...all, ...edges];
      }, [] as Edge[]);
    },

    // get sum of all edge weights
    getWeight: function getWeight() {
      // for each vertex sum all edge weights
      return (
        this.getAllVertices().reduce(
          (total, vertex) =>
            total +
            [...vertex.edges.values()].reduce(
              (vertexTotal, edge) => vertexTotal + (edge.weight || 0),
              0,
            ),
          0,
        ) / (this.directed ? 1 : 2)
      );
    },

    // get array of all vertex neighbors
    // or undefined if vertex does not exist
    getNeighbors: function getNeighbors(key) {
      const keys = this.vertices.get(key)?.edges.keys();
      // if vertex does not exist
      if (!keys) return undefined;
      // return all vertex edges
      return [...keys].map((k) => [k, this.vertices.get(k) as Vertex<T>]);
    },

    // get adjacency matrix
    getAdjacencyMatrix: function getAdjacencyMatrix(callback = () => undefined) {
      const vertices = this.getAllVertices();
      const len = vertices.length;
      const matrix: number[][] = [];

      // fill matrix
      for (let i = 0; i < len; i++) {
        matrix[i] = [];
        for (let j = 0; j < len; j++) {
          // same source vertex and destination vertex
          if (i === j) {
            matrix[i][j] = 0;
            continue;
          }
          // find edge beetween vertices
          // if no edge then fallback
          const edge = vertices[i].edges.get(vertices[j].key);
          matrix[i][j] = edge ? edge.weight || 0 : Infinity;
          // callback
          callback({
            start: i,
            end: j,
            startVertex: vertices[i],
            endVertex: vertices[j],
            edge,
          });
        }
      }
      return matrix;
    },

    // reverse graph
    reverse: function reverse() {
      // if graph is undirected than
      // reverse is not needed
      if (!this.directed) return this;

      const vertices = this.getAllVertices();
      const edges = this.getAllEdges();

      // clear all edges
      vertices.forEach((vertex) => vertex.edges.clear());

      // loop all edges and add reversed to graph
      edges.forEach((edge) => this.addEdge(edge.end, edge.start, edge.weight));
      return this;
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
