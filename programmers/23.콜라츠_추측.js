function solution(num) {
  let chk = num;
  let cnt = 0;

  if (chk === 1) return 0;

  for (let i = 0; i < 500; i++) {
    if (chk % 2 === 0) chk = chk / 2;
    else chk = chk * 3 + 1;

    cnt++;

    if (chk === 1) return cnt;
  }

  return -1;
}

console.log(solution(6));
console.log(solution(16));
//console.log(solution(5, 3));
