function solution(nums) {
  var answer = 0;

  const arr = printCombinations(nums);

  arr.forEach((x) => {
    const sumArr = x[0] + x[1] + x[2];

    for (let i = 0; i < sumArr; i++) {
      if (sumArr % i === 0 && i !== 1) {
        answer -= 1;
        break;
      }
    }

    answer += 1;
  });

  return answer;
}

function printCombinations(arr) {
  const combinations = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const combination = [arr[i], arr[j], arr[k]];
        combinations.push(combination);
      }
    }
  }

  return combinations;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
