/*function solution(n) {
  var answer = -1;

  for (let i = 1; i < n; i++) {
    if (n / i === i)  answer = (i + 1) ** 2;
  }

  return answer;
}*/

// !!!!!!!!!!!!!시간초과 오류 발생!!!!!!!!!!!!!!!!!!!!!

// 시간초과 오류 개선하려고 return 넣음
/*
function solution(n) {
  var answer = -1;

  for (let i = 1; i < n; i++) {
    if (n / i === i) return (answer = (i + 1) ** 2);
  }

  return answer;
}*/

//console.log(5 ** 2); // 거듭제곱 사용법

// !!!!!!!!!!!!!실패 1회 발생!!!!!!!!!!!!!!!!!!!!!

// 코드 확인하니 for문에 i<=n까지 인데 i<n으로 되어있었음
// 시간초과 오류 개선하려고 return 넣음
function solution(n) {
  var answer = -1;

  for (let i = 1; i <= n; i++) {
    if (n / i === i) return (answer = (i + 1) ** 2);
  }

  return answer;
}

console.log(solution(121));
//console.log(5 ** 2); // 거듭제곱 사용법

//*************수정 후 통과 **************/
