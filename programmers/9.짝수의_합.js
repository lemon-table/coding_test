function solution(n) {
  var answer = 0;
  var cnt = Number(n);

  for (var i = 1; i <= cnt; i++) {
    if (i % 2 === 0) {
      answer = answer + i;
    }
  }

  return answer;
}

//console.log(solution(10));
