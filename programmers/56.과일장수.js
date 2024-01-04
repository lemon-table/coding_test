/*function solution(k, m, score) {
  let answer = 0;
  let apple_arr = score.sort((a, b) => b - a);

  while (true) {
    if (apple_arr.length < m) return answer;

    let temp = apple_arr.slice(0, m);

    answer += Math.min(...temp) * m;

    apple_arr = apple_arr.slice(m);
  }
}*/

function solution(k, m, score) {
  let answer = 0;
  let sortedScore = score.sort((a, b) => b - a);

  let i = 0;
  while (i < sortedScore.length) {
    let box = sortedScore.slice(i, i + m);
    if (box.length < m) break;
    answer += Math.min(...box) * m;
    i += m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
