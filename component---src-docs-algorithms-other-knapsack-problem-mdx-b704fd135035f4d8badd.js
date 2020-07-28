(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{JoVb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/Algorithms/Other/KnapsackProblem.mdx"}});var l={_frontmatter:o},c=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"knapsack-problem"},"Knapsack problem"),Object(n.b)("p",null,"The knapsack problem is a problem in combinatorial optimization: Given a set of items,\neach with a weight and a value, determine the number of each item to include in a\ncollection so that the total weight is less than or equal to a given limit and the total\nvalue is as large as possible. It derives its name from the problem faced by someone who\nis constrained by a fixed-size knapsack and must fill it with the most valuable items. The\nproblem often arises in resource allocation where the decision makers have to choose from\na set of non-divisible projects or tasks under a fixed budget or time constraint,\nrespectively. ","[Source: Wikipedia]"),Object(n.b)("p",null,"The knapsack problem is interesting from the perspective of computer science for many\nreasons:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The decision problem form of the knapsack problem (Can a value of at least V be achieved\nwithout exceeding the weight W?) is NP-complete, thus there is no known algorithm both\ncorrect and fast (polynomial-time) in all cases."),Object(n.b)("li",{parentName:"ul"},"While the decision problem is NP-complete, the optimization problem is NP-hard, its\nresolution is at least as difficult as the decision problem, and there is no known\npolynomial algorithm which can tell, given a solution, whether it is optimal (which\nwould mean that there is no solution with a larger V, thus solving the NP-complete\ndecision problem)."),Object(n.b)("li",{parentName:"ul"},"There is a pseudo-polynomial time algorithm using dynamic programming."),Object(n.b)("li",{parentName:"ul"},"There is a fully polynomial-time approximation scheme, which uses the pseudo-polynomial\ntime algorithm as a subroutine, described below."),Object(n.b)("li",{parentName:"ul"},'Many cases that arise in practice, and "random instances" from some distributions, can\nnonetheless be solved exactly.')),Object(n.b)("h2",{id:"complexity"},"Complexity"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Best time"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Space"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Comments"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Greedy approach"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"2",Object(n.b)("sup",null,"n")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Finds optimal solution only with allowing fractions")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Dynamic programming approach"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n ","*"," w"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n ","*"," w"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}))))),Object(n.b)("p",null,"*"," Where n = number of items; w = capacity"),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"}),"Geeksforgeeks")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Knapsack_problem"}),"Wikipedia")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://www.youtube.com/watch?v=oTTzNMHM05I&ab_channel=AbdulBari"}),"YouTube")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://www.youtube.com/watch?v=nLmhmB6NzcM&ab_channel=AbdulBari"}),"YouTube"))))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/Algorithms/Other/KnapsackProblem.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-algorithms-other-knapsack-problem-mdx-b704fd135035f4d8badd.js.map