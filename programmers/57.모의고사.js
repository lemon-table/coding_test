function solution(answers) {
  let answer = [];

  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;

  answers.forEach((x, i) => {
    if (supo1[i % 5] === x) answer1 += 1;
    if (supo2[i % 8] === x) answer2 += 1;
    if (supo3[i % 10] === x) answer3 += 1;
  });

  answer.push(answer1);
  answer.push(answer2);
  answer.push(answer3);

  const targetValue = Math.max(...answer);
  const targetIndexes = answer.reduce((indexes, currentValue, currentIndex) => {
    if (currentValue === targetValue) {
      indexes.push(currentIndex + 1);
    }
    return indexes;
  }, []);

  return targetIndexes;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([5, 5, 5, 5, 5, 5, 5, 5]));
