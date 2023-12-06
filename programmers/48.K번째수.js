function solution(array, commands) {
  var answer = [];

  commands.forEach((x) => {
    answer.push(array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)[x[2] - 1]);
    //console.log(temp.sort((a, b) => a - b));
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
console.log(solution([10, 2], [[1, 2, 1]]));
