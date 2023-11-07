function solution(angle) {
  var answer = 0;

  if (angle === 180) return (answer = 4); //4 : 평각

  if (angle === 90) return (answer = 2); //2 : 직각

  return (answer = angle < 90 ? 1 : 3); // 1 : 예각, 3 : 둔각
}
