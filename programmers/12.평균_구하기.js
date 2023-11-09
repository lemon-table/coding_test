function solution(numbers) {
  var answer = numbers.reduce((a, c) => a + c) / numbers.length;
  console.log(answer);
  return answer;
}

const arr = [1, 2, 3, 4];
solution(arr);
