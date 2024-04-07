function solution(s) {
    let answer = [0,0];


    let beforeBinaryNumber = s;
    let zeroChkArr = [];
    let beforeNumber = zeroChkArr.length-1;

    console.log("arr lenght:"+(zeroChkArr.length-1));

    while(beforeBinaryNumber>1){

        //zeroChkArr = beforeBinaryNumber.split('0');
        zeroCount = beforeBinaryNumber.split('0').length -1;
        console.log("chk:",beforeBinaryNumber.replaceAll('0','').length);
        //beforeNumber = zeroChkArr.length-1;
        beforeNumber = beforeBinaryNumber.replaceAll('0','').length;

        answer[0]+=1
        answer[1]+=zeroCount;

        console.log("beforeBinaryNumber:"+beforeBinaryNumber);
        console.log("zeroChkArr:"+zeroChkArr);

        beforeBinaryNumber = convert10to2(beforeNumber);

        console.log("after beforeBinaryNumber:"+beforeBinaryNumber);
        console.log("-------------");

    }

    return answer;
}

function convert10to2(num){

    let newBinaryNumber = '';
    
    while(num>0){

        if(num%2===1) newBinaryNumber = '1'+newBinaryNumber;
        else newBinaryNumber = '0' + newBinaryNumber;

        console.log("newBinaryNumber:",newBinaryNumber);

        num = Math.trunc(num/2);

    }

    return newBinaryNumber;

}

console.log(solution("110010101001"));
console.log(solution("1111111"));  