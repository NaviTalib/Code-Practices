public class Overloading {
    static int area(int a ,int b){
        return a*b;
    }
    static double area(double a, double b){
        return a*b;
    }
    public static void main (String[] args) {
        int res1 = area(3,5);
        double res2 = area(9.5,3.5);
        System.out.println("Area of rectangle result 1: "+res1);
        System.out.println("Area of rectangle result 2: "+res2);
    }
}
