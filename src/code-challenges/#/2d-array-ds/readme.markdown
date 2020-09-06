Given a _2D Array_, :

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0

We define an hourglass in to be a subset of values with indices falling in this pattern in
's graphical representation:

    a b c
      d
    e f g

There are hourglasses in , and an _hourglass sum_ is the sum of an hourglass' values.
Calculate the hourglass sum for every hourglass in , then print the _maximum_ hourglass
sum.

For example, given the 2D array:

    -9 -9 -9  1 1 1
     0 -9  0  4 3 2
    -9 -9 -9  1 2 3
     0  0  8  6 6 0
     0  0  0 -2 0 0
     0  0  1  2 4 0

We calculate the following hourglass values:

    -63, -34, -9, 12,
    -10, 0, 28, 23,
    -27, -11, -2, 10,
    9, 17, 25, 18

Our highest hourglass value is from the hourglass:

    0 4 3
      1
    8 6 6

**Note:** If you have already solved the Java domain's _Java 2D Array_ challenge, you may
wish to skip this challenge.

**Function Description**

Complete the function _hourglassSum_ in the editor below. It should return an integer, the
maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

- _arr_: an array of integers

**Input Format**

Each of the lines of inputs contains space-separated integers .

**Constraints**

**Output Format**

Print the largest (maximum) hourglass sum found in .

**Sample Input**

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0

**Sample Output**

    19

**Explanation**

contains the following hourglasses:

![image](https://s3.amazonaws.com/hr-assets/0/1534256743-35b846ad4a-hourglasssum.png)

The hourglass with the maximum sum () is:

    2 4 4
      2
    1 2 4
