function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(3));
console.log(solution(4));
