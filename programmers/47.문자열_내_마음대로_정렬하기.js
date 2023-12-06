// function solution(s, n) {
//   let answer = [];
//   let input_arr = s;
//   let cnt = Number(n);
//   let temp_arr = [];

//   while (true) {
//     input_arr.forEach((x, i) => {
//       temp_arr[i] = x.charAt(cnt) + temp_arr[i];
//     });

//     console.log(temp_arr);

//     if (input_arr.length === new Set(temp_arr).size) break;
//     else {
//       if (cnt > input_arr.length) cnt = 0;
//       else cnt++;
//     }

//     console.log(new Set(temp_arr).size);
//   }

//   // while (true) {
//   //   input_arr.forEach((x) => {
//   //     answer.push(x.charAt(cnt - 1));
//   //     console.log(answer);
//   //   });

//   //   let set_du = new Set(answer);
//   //   if (answer.length === set_du.size) {
//   //     break;
//   //   } else cnt++;
//   // }

//   return temp_arr;
// }

function solution(strings, n) {
  return strings.sort((a, b) => {
    const charA = a.charAt(n);
    const charB = b.charAt(n);

    if (charA === charB) {
      // 인덱스 n의 문자가 같으면 사전순으로 정렬
      return a.localeCompare(b);
    } else {
      // 인덱스 n의 문자를 기준으로 오름차순 정렬
      return charA.localeCompare(charB);
    }
  });
}

// 예제 사용
const result1 = solution(["sun", "bed", "car"], 1);
const result2 = solution(["abce", "abcd", "cdx"], 2);

console.log(result1); // ["car", "bed", "sun"]
console.log(result2); // ["abcd", "abce", "cdx"]

//console.log(solution(["sun", "bed", "car"], 1));
//console.log(solution(["abce", "abcd", "cdx"], 2));
