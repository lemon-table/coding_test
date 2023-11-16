function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수";
}

console.log(solution(9));
console.log(solution(10));
