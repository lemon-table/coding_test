function solution(a, b) {
  return a
    .map((x, y) => x * b[y])
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
