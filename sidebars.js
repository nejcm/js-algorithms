const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'big-o-notation', 'installation'],
    },
    {
      type: 'category',
      label: 'Data Structures',
      items: [
        'data-structures/overview',
        'data-structures/doubly-linked-list',
        'data-structures/hash-table',
        'data-structures/heap',
        'data-structures/linked-list',
        'data-structures/priority-queue',
        'data-structures/queue',
        'data-structures/stack',
        'data-structures/tree',
        'data-structures/trie',
        'data-structures/graph',
        'data-structures/disjoint-set',
        'data-structures/bloom-filter',
      ],
    },
    {
      type: 'category',
      label: 'Algorithms',
      items: [
        'Algorithms/Overview',
        {
          type: 'category',
          label: 'Math',
          items: [
            'Algorithms/Math/Combinations',
            'Algorithms/Math/Factorial',
            'Algorithms/Math/Permutations',
          ],
        },
        {
          type: 'category',
          label: 'Pattern',
          items: [
            'Algorithms/Pattern/BoyerMoore',
            'Algorithms/Pattern/KnuthMorrisPratt',
            'Algorithms/Pattern/Naive',
            'Algorithms/Pattern/RabinKarp',
            'Algorithms/Pattern/ZAlgorithm',
          ],
        },
        {
          type: 'category',
          label: 'Searching',
          items: [
            'Algorithms/Searching/BinarySearch',
            'Algorithms/Searching/InterpolationSearch',
            'Algorithms/Searching/JumpSearch',
            'Algorithms/Searching/LinearSearch',
          ],
        },
        {
          type: 'category',
          label: 'Sorting',
          items: [
            'Algorithms/Sorting/BubbleSort',
            'Algorithms/Sorting/BucketSort',
            'Algorithms/Sorting/CountingSort',
            'Algorithms/Sorting/HeapSort',
            'Algorithms/Sorting/InsertionSort',
            'Algorithms/Sorting/MergeSort',
            'Algorithms/Sorting/QuickSort',
            'Algorithms/Sorting/RadixSort',
            'Algorithms/Sorting/SelectionSort',
            'Algorithms/Sorting/ShellSort',
            'Algorithms/Sorting/TimSort',
          ],
        },
        {
          type: 'category',
          label: 'String',
          items: ['Algorithms/String/LevenshteinDistance'],
        },
        {
          type: 'category',
          label: 'Tree',
          items: ['Algorithms/Tree/BFS&DFS'],
        },
        {
          type: 'category',
          label: 'Other',
          items: ['Algorithms/Other/KnapsackProblem'],
        },
        {
          type: 'category',
          label: 'Graph',
          items: [
            'Algorithms/Graph/AStar',
            'Algorithms/Graph/ArticulationPoints',
            'Algorithms/Graph/BFS&DFS',
            'Algorithms/Graph/BellmanFord',
            'Algorithms/Graph/Bridges',
            'Algorithms/Graph/DetectCycle',
            'Algorithms/Graph/Dijkstra',
            'Algorithms/Graph/FloydWarshall',
            'Algorithms/Graph/HamiltonianCycle',
            'Algorithms/Graph/Kruskal',
            'Algorithms/Graph/Prim',
            'Algorithms/Graph/StronglyConnectedComponents',
            'Algorithms/Graph/TopologicalSort',
            'Algorithms/Graph/TravellingSalesman',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Code Challenges',
      items: ['CodeChallenges/Overview'],
    },
  ],
};

module.exports = sidebars;
