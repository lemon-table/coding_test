function solution(food) {
  var answer = "";

  for (i = 1; i < food.length; i++) {
    let str_i = String(i);
    if (food[i] !== 1) answer += str_i.repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + answer.split("").reverse().join("");
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
