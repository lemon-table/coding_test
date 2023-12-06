function solution(numbers) {
  var answer = [];

  numbers.forEach((x, i, arr) => {
    for (j = i + 1; j < numbers.length; j++) {
      if (arr[j] !== undefined) answer.push(x + arr[j]);
    }
  });

  const set = new Set(answer);

  return Array.from(set)
    .map(Number)
    .sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
console.log(solution([1, 1]));
