function solution(n) {
  let arr = n.split(" ");
  let result = "";

  arr.forEach((x) => {
    let arr_x = [...x];

    arr_x.forEach((y, j) => {
      result += j % 2 === 0 ? y.toUpperCase() : y.toLowerCase();
    });

    result += " ";
  });

  return result.slice(0, -1);
}

console.log(solution("try hello world"));
