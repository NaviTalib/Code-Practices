public class Methods {
    static void hello(){
        System.out.println("Hello World!");
    };
    static void sum(int a, int b){
        System.out.println(a+"+"+b+"="+(a+b));
    }
    static int mul(int x, int y){
        return x*y;
    }

    public static void main(String args[]){
        sum(3,8);
        int mult = mul(3,9);
        System.out.println(mult); 
    }
}
