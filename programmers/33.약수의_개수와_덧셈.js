function solution(left, right) {
  let answer = 0;

  for (i = left; i <= right; i++) {
    let cnt = 0;
    let j = 1;

    while (j <= i) {
      if (i % j === 0) cnt++;
      j++;
    }

    if (cnt % 2 === 0) answer += i;
    else answer -= i;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
