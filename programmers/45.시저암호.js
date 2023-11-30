function solution(s, n) {
  let answer = "";
  const arrStr = [...s];
  const arr = [
    ...new Array(26)
      .fill()
      .map((_, i) => String.fromCharCode(i + 97))
      .join(""),
  ];
  const upperArr = arr.map((x) => x.toUpperCase());
  const pattern2 = /[a-zA-Z]/; //영어

  arrStr.forEach((x) => {
    //영어 체크하고 싶을 때
    if (!pattern2.test(x)) {
      answer += x;
      return;
    }

    let arrIdx = Number(arr.indexOf(x)) + n;
    let arrUpIdx = Number(upperArr.indexOf(x)) + n;

    if (x === x.toUpperCase())
      answer += upperArr[arrUpIdx > 25 ? arrUpIdx - 26 : arrUpIdx];
    else answer += arr[arrIdx > 25 ? arrIdx - 26 : arrIdx];
  });

  return answer;
}

// console.log(solution("AB", 1));
// console.log(solution("z", 1));
console.log(solution("a B z", 4));
