function solution(t, p) {
  var answer = 0;

  const arr_t = [...t];
  const arr_p = [...p];

  for (let i = 0; i < arr_t.length + 1 - arr_p.length; i++) {
    let num_t = "";
    for (let j = 0; j < arr_p.length; j++) num_t += arr_t[i + j];

    //console.log(num_t);

    if (p >= Number(num_t)) answer += 1;
  }

  return answer;
}

console.log(solution("3141592", "271"));
