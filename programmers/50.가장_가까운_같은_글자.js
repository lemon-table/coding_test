function solution(s) {
  let answer = [];
  let compare_arr = [...s];

  compare_arr.forEach((x, i, arr) => {
    arr.slice(0, i).includes(x)
      ? answer.push(i - arr.slice(0, i).lastIndexOf(x))
      : answer.push(-1);
  });

  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));
