function solution(arr, divisor) {
  const answer = arr
    .filter((item) => item % divisor === 0)
    .sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([2, 36, 1, 3], 1));
