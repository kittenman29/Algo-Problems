// David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

// As an example, David has  containers and  different types of balls, both of which are numbered from  to . The distribution of ball types per container are described by an  matrix of integers, . For example, consider the following diagram for :

// image

// In a single operation, David can swap two balls located in different containers.

// The diagram below depicts a single swap operation:

// image

// David wants to perform some number of swap operations such that:

// Each container contains only balls of the same type.
// No two balls of the same type are located in different containers.
// You must perform  queries where each query is in the form of a matrix, . For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.

// Function Description

// Complete the organizingContainers function in the editor below. It should return a string, either Possible or Impossible.

// organizingContainers has the following parameter(s):

// containter: a two dimensional array of integers that represent the number of balls of each color in each container
// Input Format

// The first line contains an integer , the number of queries.

// Each of the next  sets of lines is as follows:

// The first line contains an integer , the number of containers (rows) and ball types (columns).
// Each of the next  lines contains  space-separated integers describing row .
// Constraints

// Scoring

// For  of score, .
// For  of score, .
// Output Format

// For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.

function organizingContainers(container) {
  let boxes = [];
  let balls = [];
  for (let i = 0; i < container.length; i++) {
    let total = 0;
    let type = 0;
    for (let j = 0; j < container[i].length; j++) {
      total = total + container[i][j];
      type = type + container[j][i];
    }
    boxes.push(total);
    balls.push(type);
  }
  boxes.sort((a, b) => a - b);
  balls.sort((a, b) => a - b);

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] != balls[i]) {
      return "Impossible";
    }
  }
  return "Possible";
}
