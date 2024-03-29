package src.java;

import java.util.Arrays;
import java.util.List;

public class 배열의유사도 {

    public static void main(String[] args) {

        배열의유사도 instance = new 배열의유사도();

        int result = instance.solution(new String[]{"a", "b", "c"}, new String[]{"com", "b", "d", "p", "c"}); 
        System.out.println("배열의유사도: " + result);
    }

    // solution 메서드
    public int solution(String[] s1, String[] s2) {
        int answer = 0;

        List<String> strList = Arrays.asList(s2); 

        for(var i=0; i<s1.length; i++){
            
            System.out.println("chk: " + strList.contains(s1[i]));

            if(strList.contains(s1[i])) answer++;
            //s1[i].equals(s2);
        }

        return answer;
    }
    
}
