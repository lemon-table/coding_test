function solution(brown, yellow) {
  let answer = [];
  let commonFactors = [];
  const num = yellow + brown;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      let j = num / i;
      if (j > i) commonFactors.push([j, i]);

      if (i === j) return [i, j];
    }
  }

  // 여기서 commonFactors 배열을 검사하여 적절한 조합을 찾음
  for (let k = 0; k < commonFactors.length; k++) {
    const [width, height] = commonFactors[k];
    const yellowCount = (width - 2) * (height - 2);

    if (yellowCount === yellow) {
      answer = [width, height];
      break;
    }
  }
  return answer;
}

console.log(solution(10, 2));
console.log(solution(24, 24));
console.log(solution(8, 1));
console.log(solution(18, 6));
