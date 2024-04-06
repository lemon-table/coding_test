// function solution(s) {
//     const arr = s.split(" ");
//     let result = '';

//     console.log("arr:",arr);

//     for( let i  of arr){
//         const arr2 = i.split("");

//         console.log("arr2 length:",arr2.length);

//         if(arr2.length===0) {
//             result+= " ";
//             continue;
//         }

//         const firstArrStringType = typeof arr2[0].toUpperCase();
//         // console.log("arr2:",arr2);
//         // console.log("type:",typeof arr2[0].toUpperCase());
//         // console.log("hckhck:",i.substr(1));

//         result += (firstArrStringType ==="string" ? arr2[0].toUpperCase()+i.substr(1).toLowerCase() : arr2.toLowerCase());
//         result += " ";
//     }

//     return "result:"+result.slice(0, -1)+"end";
//   }

/*

위 코드의 문제점

공백 처리 미흡: 첫 번째 코드에서는 공백 문자(" ")를 기준으로 문자열을 나누고 있습니다. 하지만, 공백 문자가 연속해서 나오는 경우를 제대로 처리하지 못합니다. 예를 들어, " for the what 1what " 같은 입력값에서 연속된 공백이 결과 문자열에도 동일하게 반영되어야 하는데, 이를 처리하는 로직이 누락되어 있습니다.

불필요한 변수 사용: firstArrStringType 같은 변수를 사용하여 첫 글자가 문자열인지 확인하고 있지만, 이 과정은 사실상 필요하지 않습니다. JavaScript에서는 .toUpperCase() 메소드가 문자열에만 적용되기 때문에, 첫 글자가 알파벳일 경우에만 .toUpperCase()를 적용하면 되므로, 타입을 확인할 필요가 없습니다.

결과 문자열 생성 로직: 결과 문자열을 생성할 때, result에 문자열을 더해 나가는 방식을 사용하고 있습니다. 이 과정에서 각 단어 처리 후 무조건 공백 문자를 추가하고, 마지막에 result.slice(0, -1)을 사용하여 마지막 공백을 제거하고 있습니다. 이러한 방식은 연속된 공백 처리에 있어 정확하지 않을 수 있으며, 코드의 가독성을 떨어뜨립니다.


아래 수정한 코드의 개선점
전처리 방식: 두 번째 코드에서는 문자열 앞에 공백 문자를 추가하는 방식(" " + s)으로 전처리합니다. 이렇게 함으로써, 문자열의 첫 글자가 알파벳일 경우에도 이전 문자(공백)를 참조하여 조건을 만족시키는 로직을 간단하게 처리할 수 있습니다.

소문자 변환 후 처리: .toLowerCase() 메소드를 사용하여 먼저 전체 문자열을 소문자로 변환한 다음, 필요한 부분만 대문자로 변환합니다. 이 방식은 문자열을 한 번에 처리할 수 있어 효율적입니다.

공백 문자 연속 처리: 두 번째 코드는 공백 문자가 연속해서 나와도 올바르게 처리됩니다. 문자열을 배열로 변환한 후, 각 문자를 순회하면서 이전 문자가 공백일 때만 현재 문자를 대문자로 변환합니다. 결과적으로, 연속된 공백이 입력되어도 출력에서는 올바르게 처리됩니다.

최종 결과 처리: .join("") 메소드를 사용하여 배열의 모든 요소를 문자열로 병합하고, .slice(1)을 통해 처음에 추가한 공백을 제거합니다. 이 방식은 결과 문자열을 깔끔하게 생성할 수 있으며, 코드의 가독성도 좋습니다.

*/

  function solution(s) {

    const s_array = (" " + s.toLowerCase()).split(""); // why " "+s? 첫번째에 글자가 있는 경우를 처리하기 위함
    for (let i = 1; i < s_array.length; i++)
        if (s_array[i - 1] === " " && s_array[i] !== " ")
            s_array[i] = s_array[i].toUpperCase();
    return s_array.join("").slice(1); // 첫번째 공백 없애기

}
  
  console.log(solution("3people unFollowed me"));
  
  console.log(solution("for the last week"));

  console.log(solution(" a b "));
  console.log(solution(" "));

  console.log(solution("  for the what 1what  "));
  