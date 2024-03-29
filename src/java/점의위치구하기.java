package src.java;

public class 점의위치구하기 {

    public static void main(String[] args) {

        점의위치구하기 instance = new 점의위치구하기();

        int result = instance.solution(new int[]{2,4}); 
        System.out.println("점의위치구하기: " + result);
    }

    // solution 메서드
    public int solution(int[] dot) {

        if(dot[0]>0 && dot[1]>0) return 1;
        else if (dot[0]<0 && dot[1]>0) return 2;
        else if (dot[0]<0 && dot[1]<0) return 3;
        else return 4; 
        
    }
    
}
