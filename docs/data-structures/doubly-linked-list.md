---
sidebar_position: 2
---

# Doubly linked list

Is a linked data structure that consists of a set of sequentially linked records called
nodes. Each node contains three fields: two link fields (references to the previous and to
the next node in the sequence of nodes) and one data field. The beginning and ending
nodes' previous and next links, respectively, point to some kind of terminator, typically
a sentinel node or null, to facilitate traversal of the list. If there is only one
sentinel node, then the list is circularly linked via the sentinel node. It can be
conceptualized as two singly linked lists formed from the same data items, but in opposite
sequential orders.

The two node links allow traversal of the list in either direction. While adding or
removing a node in a doubly linked list requires changing more links than the same
operations on a singly linked list, the operations are simpler and potentially more
efficient (for nodes other than first nodes) because there is no need to keep track of the
previous node during traversal or no need to traverse the list to find the previous node,
so that its link can be modified. (Source: Wikipedia)

![Data Structure Visualization](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png)

## Complexity

| Access | Search | Insertion | Deletion | Comments |
| :----: | :----: | :-------: | :------: | :------- |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |          |

## References

- [Geeksforgeeks](https://www.geeksforgeeks.org/doubly-linked-list/)
- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=ZlNKNSz88Nk)
- [Programiz](https://www.programiz.com/dsa/linked-list-types#doubly)
- [Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/doubly_linked_list_algorithm.htm) 