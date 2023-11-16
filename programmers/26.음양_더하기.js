function solution(absolutes, signs) {
  var answer = 0;

  var arr_nums = [...absolutes];
  var arr_signs = [...signs];

  for (var i = 0; i < arr_nums.length; i++) {
    if (arr_signs[i]) answer += arr_nums[i];
    else answer -= arr_nums[i];
  }

  return answer;
}
