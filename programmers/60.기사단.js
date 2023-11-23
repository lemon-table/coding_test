/*function getMeasure(i) {
  let cnt = 0;
  let j = 0;

  while (true) {
    if (i < j) break;
    if (i % j === 0) {
      cnt++;
    }
    j++;
  }

  return cnt;
}

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = getMeasure(i);
    answer += cnt > limit ? power : cnt;
  }

  return answer;
}*/

//알고리즘 최적화 코드
function getMeasure(i) {
  let cnt = 0;
  for (let j = 1; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      cnt++;
      if (i / j !== j) {
        cnt++;
      }
    }
  }
  return cnt;
}

function solution(number, limit, power) {
  let answer = 0;
  let measureCounts = [];

  for (let i = 1; i <= number; i++) {
    let cnt = getMeasure(i);
    measureCounts[i] = cnt + (measureCounts[i - 1] || 0);

    answer += cnt > limit ? power : cnt;
  }

  return answer;
}

console.log(solution(10, 3, 2));
