// function solution(arr) {
//   var answer = arr.sort((a, b) => b - a);
//   answer.length = arr.length - 1;

//   if (answer.length === 0) return [-1];

//   return answer;
// }

//a = arr 이렇게 하면 같은 메모리를 참조한다고 하네요.

function solution(arr) {
  const minNumber = Math.min(...arr);
  arr.splice(arr.indexOf(minNumber), 1);
  const answer = arr.length ? arr : [-1];
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
