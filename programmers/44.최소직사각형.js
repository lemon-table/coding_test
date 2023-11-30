/*function solution(sizes) {
  let answer = 0;
  let width = 0;
  let height = 0;

  sizes.forEach((x) => {
    if (x[0] > width) width = x[0];
    if (x[1] > height) height = x[1];
  });

  console.log(width);
  console.log(height);

  return answer;
}*/

//알고리즘 최적화 코드

function solution(sizes) {
  let answer = 0;
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((card) => {
    const [w, h] = card;

    const maxSide = Math.max(w, h);
    const minSide = Math.min(w, h);

    // 현재 명함의 최대 길이가 현재까지의 최대 가로 길이보다 크면 갱신
    if (maxSide > maxWidth) maxWidth = maxSide;
    // 현재 명함의 최소 길이가 현재까지의 최대 세로 길이보다 크면 갱신
    if (minSide > maxHeight) maxHeight = minSide;
  });

  // 최종적으로 얻은 maxWidth와 maxHeight를 곱하여 답 계산
  answer = maxWidth * maxHeight;

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
