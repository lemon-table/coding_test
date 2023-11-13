function solution(x, n) {
  var answer = [];
  let num = 0;
  for (let i = 0; i < n; i++) answer.push((num += x));
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
