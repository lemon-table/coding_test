function solution(price, money, count) {
  var answer = 0;

  for (i = 1; i <= count; i++) answer += i;

  return answer * price > 0 ? answer * price - money : 0;
}

console.log(solution(3, 20, 4));
