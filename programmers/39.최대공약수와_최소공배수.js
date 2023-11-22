function solution(n, m) {
  let arr_n = [];
  let arr_m = [];

  for (let i = 1; i <= n; i++) if (n % i === 0) arr_n.push(i);
  for (let i = 1; i <= m; i++) if (m % i === 0) arr_m.push(i);

  let gcf = Math.max(...arr_n.filter((x) => arr_m.includes(x)));
  let lcm = 0;
  let j = 1;

  while (true) {
    if ((gcf * j) % Number(n) === 0 && (gcf * j) % Number(m) === 0) {
      lcm = gcf * j;
      break;
    }
    j++;
  }

  return [gcf, lcm];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
