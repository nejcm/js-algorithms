// http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
import {Graph, Key} from '../../../data-structures/graph';
import createPriorityQueue, {Item} from '../../../data-structures/priority-queue';

export type HeuristicCallbackIndexes = (i: number, j: number) => number;
export type HeuristicCallbackKeys = (i: Key, j: Key) => number;

type ItemData = {
  parent?: number;
  distance: number;
  visited: boolean;
};

export function aStarGraph<T>(
  graph: Graph<T>,
  start: Key,
  end: Key,
  heuristicCallback?: HeuristicCallbackKeys,
): [Key[], number] | undefined {
  const matrix = graph.getAdjacencyMatrix();
  const vertices = graph.getAllVertices();

  let startKey = -1;
  let endKey = -1;
  for (let i = 0; i < vertices.length; i++) {
    // start index
    if (vertices[i].key === start) startKey = i;
    // end index
    if (vertices[i].key === end) endKey = i;
    // break if both found
    if (startKey !== -1 && endKey !== -1) break;
  }
  // if vertices not found
  if (startKey === -1 || endKey === -1) return undefined;

  // map callback to vertex keys
  const hCallback: HeuristicCallbackIndexes | undefined = heuristicCallback
    ? (i, j) => heuristicCallback(vertices[i].key, vertices[j].key)
    : undefined;

  // a*
  const result = aStar(matrix, startKey, endKey, hCallback);
  if (!result) return result;

  // map indexes back to vertex keys
  return [result[0].map((i) => vertices[i].key), result[1]];
}

export default function aStar(
  matrix: number[][],
  start: number,
  end: number,
  heuristicCallback?: HeuristicCallbackIndexes,
): [number[], number] | undefined {
  // is empty
  if (!matrix || !matrix.length) return undefined;
  // has start and end index
  if (!(start >= 0) || !(end >= 0)) return undefined;
  // if start and end are the same
  if (start === end) return [[start], 0];

  // init queue
  const queue = createPriorityQueue<number>();
  // distances
  const items = new Map<number, ItemData>();
  // add distance for start vertex
  items.set(start, {
    distance: 0,
    visited: false,
  });
  // init vertices queue
  queue.enqueue(start, 0);

  // modified manhattan distance
  // https://en.wikipedia.org/wiki/Taxicab_geometry
  const manhattanDistance = (i: number, j: number): number => {
    return Math.abs(i - j);
  };
  // calculate distance
  const heuristic = heuristicCallback || manhattanDistance;

  // build result
  const buildResult = (): [number[], number] | undefined => {
    // get end item
    const item = items.get(end);
    // if not found
    if (!item) return undefined;

    // loop parents and add them to path
    const path: number[] = [end];
    let parent = item.parent;
    while (parent !== undefined) {
      path.unshift(parent);
      parent = (items.get(parent) as ItemData).parent;
    }
    // return result
    return [path, item.distance];
  };

  while (!queue.isEmpty()) {
    // get item from queue
    const currentIndex = (queue.dequeue() as Item<number>).value as number;

    // node has been found
    if (currentIndex === end) {
      break;
    }

    // add current index to visited
    const currentData = items.get(currentIndex) as ItemData;
    currentData.visited = true;
    items.set(currentIndex, currentData);

    // iterate over neighbors
    for (let index = 0; index < matrix[currentIndex].length; index++) {
      // continue if no connection between vertices
      if (matrix[currentIndex][index] === Infinity) continue;
      // get neighbor data or default
      const nextData = items.get(index) || {
        distance: Infinity,
        visited: false,
      };
      // skip if already visited
      if (nextData.visited) continue;
      // is already in queue
      const isInQueue = queue.contains(index);

      // update distances to every connected vertex
      const distanceToNext = nextData.distance;
      const completeDistance = currentData.distance + matrix[currentIndex][index];

      // if the distance is shorter than update it
      if (completeDistance < distanceToNext) {
        nextData.distance = completeDistance;
        nextData.parent = currentIndex;
        items.set(index, nextData);

        // update priority queue
        if (isInQueue) {
          const hPriority = nextData.distance + heuristic(currentIndex, index);
          queue.changePriority(index, hPriority);
        }
      }

      // add neighbors to queue
      if (!isInQueue) {
        const hPriority = nextData.distance + heuristic(currentIndex, index);
        queue.enqueue(index, hPriority);
      }
    }
  }

  return buildResult();
}
