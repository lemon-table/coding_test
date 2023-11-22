/*const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) =>
      [fixed, ...el].sort((a, b) => a - b)
    );
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

function solution(number) {
  var answer = 0;

  const resultArr = getPermutations(number, 3);

  const uniqueResults = resultArr
    .map((arr) => JSON.stringify(arr))
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((str) => JSON.parse(str));

  //console.log(uniqueResults);

  uniqueResults.forEach((x) => {
    let sum = x.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);

    if (sum === 0) answer += 1;
  });

  return answer;
}*/

//결국 사용한 답안
function solution(number) {
  var answer = 0;

  //n개로 이루어진 정수 배열에서 3개를 뽑아서 더했을 때 0이 되는 경우의 수를 구하는 코드
  //수학적으로 표현하면 n개중에서 r개를 뽑는 경우의 수이다.
  //이 경우는 n개에서 3개를 뽑아서 더했을 때 0이 되는 경우를 구하면 된다.
  //조합은 순서가 상관이 없으므로 중복되는 값은 동일한 것으로 간주한다.
  //그래서 [-2, 3, 0, 2, -5] 일때 0,3,5나 5,3,0 이나 동일한 것으로 간주하기 때문에 배열을 한번 반복할때마다 + 1씩 해서
  //같은 조합이 나오지 않도록 했다.
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
