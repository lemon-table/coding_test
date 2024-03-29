package src.java;

import java.util.Arrays;

public class 배열자르기 {

    public static void main(String[] args) {

        배열자르기 instance = new 배열자르기();

        int[] result = instance.solution(new int[]{1,2,3,4,5},1,3); 
        System.out.println("배열자르기: " + result);
    }

    // solution 메서드
    public int[] solution(int[] numbers, int num1, int num2) {
        // num2와 num1의 차이를 이용하여 새로운 배열의 크기를 정합니다.
        int[] answer = new int[num2 - num1 + 1];
        
        // num1부터 num2까지 numbers 배열의 값을 answer 배열로 복사합니다.
        for(int i = num1; i <= num2; i++) {
            answer[i - num1] = numbers[i];
        }
        
        // 결과 배열을 반환합니다.
        return answer;
    }
    
}
