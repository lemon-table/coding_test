function solution(n) {
  var answer = 0;

  let chk = n;
  while (chk > 0) {
    answer += chk % 10;
    chk = Math.floor(chk / 10);
  }

  return answer;
}

console.log(solution(987));
