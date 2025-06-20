---
sidebar_position: 3
---

# Hash table

A hash table (hash map) is a data structure that implements an associative array abstract
data type, a structure that can map keys to values. A hash table uses a hash function to
compute an index, also called a hash code, into an array of buckets or slots, from which
the desired value can be found. During lookup, the key is hashed and the resulting hash
indicates where the corresponding value is stored.

Ideally, the hash function will assign each key to a unique bucket, but most hash table
designs employ an imperfect hash function, which might cause hash collisions where the
hash function generates the same index for more than one key. Such collisions are always
accommodated in some way.

In a well-dimensioned hash table, the average cost (number of instructions) for each
lookup is independent of the number of elements stored in the table. Many hash table
designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized)
constant average cost per operation.

In many situations, hash tables turn out to be on average more efficient than search trees
or any other table lookup structure. For this reason, they are widely used in many kinds
of computer software, particularly for associative arrays, database indexing, caches, and
sets. (Source: Wikipedia)

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Hash collision resolved by separate chaining.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## References

- [Geeksforgeeks](https://www.geeksforgeeks.org/hashing-data-structure/)
- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8)
- [Programiz](https://www.programiz.com/dsa/hash-table)
- [Hackerearth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- [Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm) 