function solution(a, b) {
  let answer = 0;
  let temp = 0;

  if (a === b) return a;

  if (b < a) {
    temp = b;
    b = a;
    a = temp;
  }

  for (let i = a; i <= b; i++) answer += i;

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
