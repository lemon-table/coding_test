/*function solution(k, score) {
  let k_arr = [];
  let answer = [];

  score.forEach((x, i, arr) => {
    let temp = arr
      .slice(0, i)
      .map(Number)
      .sort(function (a, b) {
        return b - a;
      });

    k_arr.sort(function (a, b) {
      return b - a;
    });

    console.log("before k_arr:" + k_arr);
    if (k_arr.length === k) {
      if (x > k_arr[0] || x === k_arr[1]) {
        let popped = k_arr.pop();
        k_arr.unshift(x);
        answer.push(k_arr[k - 1]);
        console.log("k_arr:" + k_arr);
      }
      answer.push(Math.min(k_arr));
    } else if (k_arr.length < k) {
      k_arr.push(x);
      answer.push(Math.min(k_arr));
    }
  });
  return answer;
}*/

function solution(k, score) {
  let temple = new Array(k).fill(null);
  let result = [];

  score.forEach((x) => {
    //console.log(x);
    if (temple.includes(null)) {
      temple.unshift(x);
      temple.pop();

      // null을 제외한 숫자만 필터링
      let num_arr = temple.filter((value) => typeof value === "number");

      result.push(Math.min(...num_arr));
    } else {
      temple.push(x);
      temple.sort((a, b) => b - a);
      let num_arr = temple.slice(0, k);

      //console.log("num_arr:" + num_arr);
      result.push(Math.min(...num_arr));
    }
  });
  //console.log(temple);
  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
