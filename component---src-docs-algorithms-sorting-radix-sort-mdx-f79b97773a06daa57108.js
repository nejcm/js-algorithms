(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ejvj:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return o})),r.d(t,"default",(function(){return s}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk"),r("mXGw");var a=r("/FXl"),n=r("TjRS");r("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Algorithms/Sorting/RadixSort.mdx"}});var c={_frontmatter:o},l=n.a;function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(l,i({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"radix-sort"},"Radix Sort"),Object(a.b)("p",null,"In computer science, radix sort is a non-comparative sorting algorithm. It\navoids comparison by creating and distributing elements into buckets according\nto their radix. For elements with more than one significant digit, this\nbucketing process is repeated for each digit, while preserving the ordering of\nthe prior step, until all digits have been considered. For this reason, radix\nsort has also been called bucket sort and digital sort. (Source: Wikipedia)"),Object(a.b)("p",null,"Advantages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fast when the keys are short i.e. when the range of the array elements is\nless."),Object(a.b)("li",{parentName:"ul"},"Used in suffix array constuction algorithms like Manber's algorithm and DC3\nalgorithm.")),Object(a.b)("p",null,"Disadvantages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Since Radix Sort depends on digits or letters, Radix Sort is much less\nflexible than other sorts. Hence , for every different type of data it needs\nto be rewritten."),Object(a.b)("li",{parentName:"ul"},"The constant for Radix sort is greater compared to other sorting algorithms."),Object(a.b)("li",{parentName:"ul"},"It takes more space compared to Quicksort which is inplace sorting.")),Object(a.b)("p",null,"(Source: Hackerearth)"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Radix Sort",src:"https://www.researchgate.net/publication/291086231/figure/fig1/AS:614214452404240@1523451545568/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the.png"})),Object(a.b)("h2",{id:"pseudocode"},"Pseudocode"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"radixSort(array)\n  d <- maximum number of digits in the largest element\n  create d buckets of size 0-9\n  for i <- 0 to d\n    sort the elements according to ith place digits using countingSort\n\ncountingSort(array, d)\n  max <- find largest element among dth place elements\n  initialize count array with all zeros\n  for j <- 0 to size\n    find the total count of each unique digit in dth place of elements and\n    store the count at jth index in count array\n  for i <- 1 to max\n    find the cumulative sum and store it in count array itself\n  for j <- size down to 1\n    restore the elements to array\n    decrease count of each element restored by 1\n")),Object(a.b)("h2",{id:"complexity"},"Complexity"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Best"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Average"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Worst"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Memory"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Stable"),Object(a.b)("th",i({parentName:"tr"},{align:"left"}),"Comments"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Radix sort"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n ","*"," k"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n ","*"," k"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n ","*"," k"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n + k"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"Yes"),Object(a.b)("td",i({parentName:"tr"},{align:"left"}),"k - length of longest key")))),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.geeksforgeeks.org/radix-sort/"}),"Geeksforgeeks")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Radix_sort"}),"Wikipedia")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.youtube.com/watch?v=nu4gDuFabIM&ab_channel=GeeksforGeeks"}),"YouTube")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.programiz.com/dsa/radix-sort"}),"Programiz")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://www.hackerearth.com/practice/algorithms/sorting/radix-sort/tutorial/"}),"Hackerearth"))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Algorithms/Sorting/RadixSort.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-algorithms-sorting-radix-sort-mdx-f79b97773a06daa57108.js.map