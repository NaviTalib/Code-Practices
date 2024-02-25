
public class Recu {
    static int nsum(int num){
        if(num<0){
            return -1;
        }
        else if(num==0 || num==1){
            return 1;
        }
        else{
            return num*nsum(num-1);
        }
    }

    public static void main(String[] args) {
        int result = nsum(5);
        System.out.println("factorial  = "+result);
    }
}
