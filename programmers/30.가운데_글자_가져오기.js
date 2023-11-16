function solution(s) {
  var answer = s.split("");
  var centerNum = Math.round(s.length / 2) - 1;
  answer =
    s.length % 2 === 0
      ? answer.slice(centerNum, centerNum + 2).join("")
      : answer[centerNum];

  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
