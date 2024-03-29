package src.java;

public class 머쓱이보다키큰사람 {

    public static void main(String[] args) {

        머쓱이보다키큰사람 instance = new 머쓱이보다키큰사람();

        int result = instance.solution(new int[]{149, 180, 192, 170}, 167); 
        System.out.println("머쓱이보다키큰사람: " + result);
    }

    // solution 메서드
    public int solution(int[] array, int height) {
        int answer = 0;
        
        for(int i=0; i<array.length; i++){
            if(array[i]>height) answer++;
        }
        
        return answer;
    }
    
}
