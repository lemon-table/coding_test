function solution(s) {
  let answer = "";
  let eng_str = "";
  const arr = [...s];
  const eng_arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((x, i, arr) => {
    console.log(x + " " + isNaN(x) + " next:" + arr[i + 1]);
    if (!isNaN(x)) {
      //숫자일때

      answer += x;
    } else {
      //문자일때
      eng_str += x;

      if (!isNaN(arr[i + 1]) || eng_arr.includes(eng_str)) {
        //다음 글자가 숫자
        answer += eng_arr.indexOf(eng_str);
        console.log("eng_str:" + eng_str);

        eng_str = "";
      }
    }
  });

  return Number(answer + eng_str);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("123"));
