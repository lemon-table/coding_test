function solution(s) {
  const arr = s.split(" ");

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

console.log(solution("1 2 3 4"));

console.log(solution("-1 -2 -3 -4"));

console.log(solution("-1 -1"));
