function solution(x) {
  let answer = false;
  let chk = x < 10 ? -1 : x;
  let sum = x < 10 ? x : 0;

  while (chk > 0) {
    sum += chk % 10;
    chk = Math.floor(chk / 10);
  }

  if (x % sum === 0) answer = true;

  return answer;
}

console.log(solution(10));
console.log(solution(11));
