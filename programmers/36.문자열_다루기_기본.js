function solution(s) {
  var answer = [...s];
  var result = true;

  if (s.length !== 4 && s.length !== 6) return false;

  answer.forEach((item) => {
    if (isNaN(Number(item))) return false;
  });

  return result;
}

console.log(solution("A234"));
console.log(solution("1234"));
