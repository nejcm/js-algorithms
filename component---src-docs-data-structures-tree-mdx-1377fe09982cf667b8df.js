(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{XDDA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var r=a("/FXl"),n=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/DataStructures/Tree.mdx"}});var s={_frontmatter:o},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tree"},"Tree"),Object(r.b)("p",null,"is a widely used abstract data type (ADT) that simulates a hierarchical tree\nstructure, with a root value and subtrees of children with a parent node,\nrepresented as a set of linked nodes."),Object(r.b)("p",null,'A tree data structure can be defined recursively as a collection of nodes\n(starting at a root node), where each node is a data structure consisting of a\nvalue, together with a list of references to nodes (the "children"), with the\nconstraints that no reference is duplicated, and none points to the root.'),Object(r.b)("p",null,'Alternatively, a tree can be defined abstractly as a whole (globally) as an\nordered tree, with a value assigned to each node. Both these perspectives are\nuseful: while a tree can be analyzed mathematically as a whole, when actually\nrepresented as a data structure it is usually represented and worked with\nseparately by node (rather than as a set of nodes and an adjacency list of edges\nbetween nodes, as one may represent a digraph, for instance). For example,\nlooking at a tree as a whole, one can talk about "the parent node" of a given\nnode, but in general as a data structure a given node only contains the list of\nits children, but does not contain a reference to its parent (if any). (Source:\nWikipedia)'),Object(r.b)("h3",{id:"some-tree-types"},"Some tree types:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Binary Tree"),": This is the most basic basic from of tree structure. Where\neach node can have utmost two children. A perfect binary tree is a binary\ntree in which all interior nodes have two children and all leaves have the\nsame depth or same level. A full binary tree (sometimes referred to as a\nproper or plane binary tree) is a tree in which every node in the tree has\neither 0 or 2 children. In a complete binary tree every level, except\npossibly the last, is completely filled, and all nodes in the last level are\nas far left as possible. In the infinite complete binary tree, every node has\ntwo children."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Binary search tree"),": BST is a binary tree with certain properties such as\n, and left child of the given node contains value less than equal to the\ngiven node and right hand child contain node greater than the given node."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"AVL tree or height balanced binary tree"),": It is a variation of the Binary\ntree where height difference between left and right sub tree can be at\nmost 1. If at any time they differ by more than one, rebalancing is done to\nrestore this property. Lookup, insertion, and deletion all take O(log n) time\nin both the average and worst cases, where n is the number of nodes in the\ntree prior to the operation."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Red-Black tree"),": Another variant of binary tree similar to AVL tree it is\na self balancing binary search tree. In this tree nodes are either colored\nred or black."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Splay tree"),": A splay tree is a self-adjusting binary search tree with the\nadditional property that recently accessed elements are quick to access\nagain. All normal operations on a binary search tree are combined with one\nbasic operation, called splaying. Splaying the tree for a certain element\nrearranges the tree so that the element is placed at the root of the tree."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"N-ary tree"),": In this tree the limitation of the binary tree is removed.\nHere a node can have at most n children. Like binary tree it can be\nfull,complete or perfect n-ary tree. N-ary is some time known as forest."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Fenwick tree"),": Is a binary indexed tree is a data structure that can\nefficiently update elements and calculate prefix sums in a table of numbers."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Trie Structure"),": In computer science, a trie, also called digital tree and\nsometimes radix tree or prefix tree (as they can be searched by prefixes), is\nan ordered tree data structure that is used to store a dynamic set or\nassociative array where the keys are usually strings. All the descendants of\na node have a common prefix of the string associated with that node, and the\nroot is associated with the empty string."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Suffix tree"),": Trie and suffix tree are closely related. a suffix tree\n(also called PAT tree or, in an earlier form, position tree) is a compressed\ntrie containing all the suffixes of the given text as their keys and\npositions in the text as their values. Suffix trees allow particularly fast\nimplementations of many important string operations."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Huffman Tree"),": Huffman tree is a frequency sorted binary tree used widely\nin compressing data. Huffman tree is constructed to allocate a short code\nword to a long text based on its frequency of occurrences."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Heap Structure"),": Heap structure is another widely used tree structure\nwith a specific ordering property. There are two types of heap - Min heap\nand Max heap. In a min heap the parent of a node must be smaller than the\nvalues of all its children. Similarly in max heap the parent always have\ngreater value compared to all its children. One common implementation of\nheap is Binary heap where each parent can have at most two children.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Data Structure Visualization",src:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg"})),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:null}),"Operation"),Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"Best Case Complexity"),Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"Average Case Complexity"),Object(r.b)("th",i({parentName:"tr"},{align:"center"}),"Worst Case Complexity"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"Search"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(n)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"Insertion"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(n)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"Deletion"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",i({parentName:"tr"},{align:"center"}),"O(n)")))),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.geeksforgeeks.org/binary-tree-data-structure/"}),"Geeksforgeeks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"Wikipedia")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.youtube.com/watch?v=oSWTXtMglKE"}),"YouTube")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.programiz.com/dsa/trees"}),"Programiz")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/"}),"Hackerearth")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm"}),"Tutorialspoint"))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/DataStructures/Tree.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-data-structures-tree-mdx-1377fe09982cf667b8df.js.map