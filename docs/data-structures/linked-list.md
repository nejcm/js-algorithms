---
sidebar_position: 5
---

# Linked list

Is a linear collection of data elements, whose order is not given by their physical
placement in memory. Instead, each element points to the next. It is a data structure
consisting of a collection of nodes which together represent a sequence. In its most basic
form, each node contains: data, and a reference (in other words, a link) to the next node
in the sequence. This structure allows for efficient insertion or removal of elements from
any position in the sequence during iteration. More complex variants add additional links,
allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback
of linked lists is that access time is linear (and difficult to pipeline). Faster access,
such as random access, is not feasible. Arrays have better cache locality compared to
linked lists.

Linked lists are among the simplest and most common data structures. They can be used to
implement several other common abstract data types, including lists, stacks, queues,
associative arrays, and S-expressions, though it is not uncommon to implement those data
structures directly without using a linked list as the basis.

Disadvantages:

- They use more memory than arrays because of the storage used by their pointers.
- Nodes in a linked list must be read in order from the beginning as linked lists are
  inherently sequential access.
- Nodes are stored noncontiguously, greatly increasing the time periods required to access
  individual elements within the list, especially with a CPU cache.
- Difficulties arise in linked lists when it comes to reverse traversing. For instance,
  singly-linked lists are cumbersome to navigate backward [1] and while doubly linked
  lists are somewhat easier to read, memory is consumed in allocating space for a
  back-pointer.

(Source: Wikipedia)

![Data Structure Visualization](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

## Complexity

| Access | Search | Insertion | Deletion | Comments |
| :----: | :----: | :-------: | :------: | :------- |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |          |

## References

- [Geeksforgeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA)
- [Programiz](https://www.programiz.com/dsa/linked-list)
- [Hackerearth](https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/)
- [Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm)