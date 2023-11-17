function solution(arr1, arr2) {
  //var answer = arr1 + arr2;
  //console.log(...arr1);

  const answer = arr1;

  //console.log(newArr1);

  arr1.forEach((item, idx) => {
    console.log("item:" + item);

    item.forEach((item2, idx2) => {
      console.log("item2:" + item2);
      console.log("arr2:" + arr2[idx][idx2]);

      answer[idx][idx2] = item2 + arr2[idx][idx2];
    });
  });

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
