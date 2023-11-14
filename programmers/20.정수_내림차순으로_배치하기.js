function solution(n) {
  let answer = 0;
  let arr = [];
  let chk = n;

  while (chk > 0) {
    arr.push(chk % 10);
    chk = Math.floor(chk / 10);
  }
  answer = Number(arr.sort().reverse().join(""));

  return answer;
}

console.log(solution(118372));
