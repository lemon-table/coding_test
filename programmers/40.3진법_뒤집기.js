function getBbase3(chk) {
  let str_3 = "";

  while (true) {
    str_3 = (chk % 3) + str_3;

    if (chk < 3) break;

    chk = Math.trunc(chk / 3);
  }

  return str_3;
}

function solution(n) {
  let base3 = [...getBbase3(n)].map(Number);
  let result = 0;

  base3.forEach((x, i) => {
    if (x !== 0) result += x * 3 ** i;
  });

  return result;
}

console.log(solution(45));
console.log(solution(125));
