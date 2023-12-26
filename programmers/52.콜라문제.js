/*function solution(a, b, n) {
  var answer = 0;

  let chk_n = n;

  let get_cola = 0;

  while (chk_n > 0) {
    let give_cola = 0;
    let take_cola = 0;
    let cnt = 0;

    for (i = 0; i < chk_n / a; i++) {
      give_cola = give_cola + a;

      if (give_cola > chk_n - a) {
        continue;
      }
    }
    console.log("give_cola:" + give_cola);
    take_cola = (give_cola / a) * b;
    console.log("take_cola:" + take_cola);
    console.log("chk_n:" + chk_n);
    answer = answer + take_cola;
    chk_n = chk_n - give_cola + take_cola + 1;
    //chk_n -= cnt;
    console.log("chk_n:" + chk_n);
  }

  return answer;
}*/

function solution(a, b, n) {
  let totalColas = 0; // 상빈이가 받은 전체 콜라 수
  let remainingBottles = n; // 남은 빈 병의 수

  while (remainingBottles >= a) {
    // 보유 중인 빈 병이 a개 이상일 때 까지 반복
    const exchangedColas = Math.floor(remainingBottles / a) * b; // 빈 병을 가져다 주고 받은 콜라 수
    remainingBottles = (remainingBottles % a) + exchangedColas; // 남은 빈 병의 수 갱신
    totalColas += exchangedColas; // 전체 콜라 수 갱신
  }

  return totalColas;
}

console.log(solution(3, 1, 20));
