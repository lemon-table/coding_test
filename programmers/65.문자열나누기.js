function solution(s) {
  let answer = 0;
  let str = s;
  let arr = [...str];
  let firstStr = arr[0];

  while (arr.length > 1) {
    let Xcnt = 0;
    let NotXcnt = 0;

    for (let x of arr) {
      if (x === firstStr) Xcnt += 1;
      else NotXcnt += 1;

      if (Xcnt === NotXcnt) {
        answer += 1;
        str = str.slice(Xcnt + NotXcnt);
        arr = [...str];

        if (arr.length === 1) answer += 1;

        console.log(`arr:${arr}`);

        Xcnt = 0;
        NotXcnt = 0;
        break;
      }
    }
  }

  return answer;
}
/*
function solution(s) {
  var answer = 0;
  let sameCount = 0,
    diffCount = 0,
    sameStr;
  s.split("").forEach((str) => {
    // 첫 시작일 경우
    if (sameStr === undefined) {
      sameStr = str;
      sameCount++;
    }
    // 첫 시작은 아닌데 같은 글자가 나올 경우
    else if (sameStr === str) {
      sameCount++;
    }
    // 첫 시작은 아닌테 다른 글자가 나올 경우
    else {
      diffCount++;
    }

    // 처음으로 두 횟수가 같이지는 순간
    if (sameCount === diffCount) {
      sameCount = 0;
      diffCount = 0;
      sameStr = undefined;
      answer++;
    }
  });

  // 남은 부분이 존재하면 해당 문자열도 추가 분리
  if (sameCount !== 0 || diffCount !== 0) answer++;

  return answer;
}*/

console.log(solution("banana")); //3
console.log(solution("abracadabra"));  //6
console.log(solution("aaabbaccccabba"));  //3
console.log(solution("abaabab"));  //2
