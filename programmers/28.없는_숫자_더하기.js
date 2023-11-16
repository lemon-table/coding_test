function solution(numbers) {
  return (
    45 -
    numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
  );
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
