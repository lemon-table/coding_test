function solution(a, b) {
  const date = new Date("2016", a - 1, b);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
}

console.log(solution(5, 24));
console.log(solution(8, 30));
