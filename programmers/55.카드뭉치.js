function solution(cards1, cards2, goal) {
  const hasCommonValue = cards1.some((value) => cards2.includes(value));

  let cards1_arr = cards1;
  let cards2_arr = cards2;

  if (hasCommonValue) return "No";

  /*
  goal.forEach((x) => {
    //console.log(x);
    //if (!cards1.includes(x) && !cards2.includes(x)) return "No";

    console.log("x:" + x);
    console.log("chk1 :" + cards1_arr);
    console.log("chk2 :" + cards2_arr);

    if (cards1_arr[0] !== x && cards2_arr[0] !== x) {
      console.log("hckchkch");
      return "No";
    } else {
      if (cards1_arr[0] === x) cards1_arr.shift();

      if (cards2_arr[0] === x) cards2_arr.shift();
    }
  });*/

  for (const x of goal) {
    if (cards1_arr[0] !== x && cards2_arr[0] !== x) {
      return "No"; // 이 지점에서 solution 함수 종료
    } else {
      if (cards1_arr[0] === x) cards1_arr.shift();
      if (cards2_arr[0] === x) cards2_arr.shift();
    }
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
