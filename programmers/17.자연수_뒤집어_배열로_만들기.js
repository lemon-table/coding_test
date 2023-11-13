function solution(n) {
  var answer = [];

  while (true) {
    if (n > 9) {
      answer.push(n % 10);
      n = Math.trunc(n / 10);
    } else {
      answer.push(n);
      break;
    }
  }

  return answer;
}

console.log(solution(12345));
