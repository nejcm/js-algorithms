---
sidebar_position: 9
---

# Tree

is a widely used abstract data type (ADT) that simulates a hierarchical tree structure,
with a root value and subtrees of children with a parent node, represented as a set of
linked nodes.

A tree data structure can be defined recursively as a collection of nodes (starting at a
root node), where each node is a data structure consisting of a value, together with a
list of references to nodes (the "children"), with the constraints that no reference is
duplicated, and none points to the root.

Alternatively, a tree can be defined abstractly as a whole (globally) as an ordered tree,
with a value assigned to each node. Both these perspectives are useful: while a tree can
be analyzed mathematically as a whole, when actually represented as a data structure it is
usually represented and worked with separately by node (rather than as a set of nodes and
an adjacency list of edges between nodes, as one may represent a digraph, for instance).
For example, looking at a tree as a whole, one can talk about "the parent node" of a given
node, but in general as a data structure a given node only contains the list of its
children, but does not contain a reference to its parent (if any). (Source: Wikipedia)

### Some tree types:

1. **Binary Tree**: This is the most basic basic from of tree structure. Where each node
   can have utmost two children. A perfect binary tree is a binary tree in which all
   interior nodes have two children and all leaves have the same depth or same level. A
   full binary tree (sometimes referred to as a proper or plane binary tree) is a tree in
   which every node in the tree has either 0 or 2 children. In a complete binary tree
   every level, except possibly the last, is completely filled, and all nodes in the last
   level are as far left as possible. In the infinite complete binary tree, every node has
   two children.
2. **Binary search tree**: BST is a binary tree with certain properties such as , and left
   child of the given node contains value less than equal to the given node and right hand
   child contain node greater than the given node.
3. **AVL tree or height balanced binary tree**: It is a variation of the Binary tree where
   height difference between left and right sub tree can be at most 1. If at any time they
   differ by more than one, rebalancing is done to restore this property. Lookup,
   insertion, and deletion all take O(log n) time in both the average and worst cases,
   where n is the number of nodes in the tree prior to the operation.
4. **Red-Black tree**: Another variant of binary tree similar to AVL tree it is a self
   balancing binary search tree. In this tree nodes are either colored red or black.
5. **Splay tree**: A splay tree is a self-adjusting binary search tree with the additional
   property that recently accessed elements are quick to access again. All normal
   operations on a binary search tree are combined with one basic operation, called
   splaying. Splaying the tree for a certain element rearranges the tree so that the
   element is placed at the root of the tree.
6. **N-ary tree**: In this tree the limitation of the binary tree is removed. Here a node
   can have at most n children. Like binary tree it can be full,complete or perfect n-ary
   tree. N-ary is some time known as forest.
7. **Fenwick tree**: Is a binary indexed tree is a data structure that can efficiently
   update elements and calculate prefix sums in a table of numbers.
8. **Trie Structure**: In computer science, a trie, also called digital tree and sometimes
   radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree
   data structure that is used to store a dynamic set or associative array where the keys
   are usually strings. All the descendants of a node have a common prefix of the string
   associated with that node, and the root is associated with the empty string.
9. **Suffix tree**: Trie and suffix tree are closely related. a suffix tree (also called
   PAT tree or, in an earlier form, position tree) is a compressed trie containing all the
   suffixes of the given text as their keys and positions in the text as their values.
   Suffix trees allow particularly fast implementations of many important string
   operations.
10. **Huffman Tree**: Huffman tree is a frequency sorted binary tree used widely in
    compressing data. Huffman tree is constructed to allocate a short code word to a long
    text based on its frequency of occurrences.
11. **Heap Structure**: Heap structure is another widely used tree structure with a
    specific ordering property. There are two types of heap - Min heap and Max heap. In a
    min heap the parent of a node must be smaller than the values of all its children.
    Similarly in max heap the parent always have greater value compared to all its
    children. One common implementation of heap is Binary heap where each parent can have
    at most two children.

![Data Structure Visualization](https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg)

| Operation | Best Case Complexity | Average Case Complexity | Worst Case Complexity |
| --------- | :------------------: | :---------------------: | :-------------------: |
| Search    |       O(log n)       |        O(log n)         |         O(n)          |
| Insertion |       O(log n)       |        O(log n)         |         O(n)          |
| Deletion  |       O(log n)       |        O(log n)         |         O(n)          |

## References

- [Geeksforgeeks](https://www.geeksforgeeks.org/binary-tree-data-structure/)
- [Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure))
- [YouTube](https://www.youtube.com/watch?v=oSWTXtMglKE)
- [Programiz](https://www.programiz.com/dsa/trees)
- [Hackerearth](https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/)
- [Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm) 