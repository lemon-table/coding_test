package src.java;

public class 두수의차 {

    public static void main(String[] args) {

        두수의차 instance = new 두수의차();

        int result = instance.solution(10, 5); // 예시로 10과 5를 사용
        System.out.println("두 수의 차: " + result);
    }

        // solution 메서드
        public int solution(int num1, int num2) {
            return num1 - num2;
        }
    
    
}
