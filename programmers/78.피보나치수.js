function solution(n) {
  let answer = 0;

  let F1 = 0;
  let F2 = 1;

  for (let i = 2; i <= n; i++) {
    answer = F1 + F2;

    if (answer > 1234567) answer %= 1234567;

    F1 = F2;
    F2 = answer;
  }
  return answer;
}

console.log(solution(5));
