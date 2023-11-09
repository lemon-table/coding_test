function solution(numbers) {
  var answer = numbers.reduce((a, c) => a + c) / numbers.length;
  console.log(answer);
  return answer;
}

const arr = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
solution(arr);
