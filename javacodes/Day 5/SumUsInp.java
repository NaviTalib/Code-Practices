import java.util.Scanner;
public class SumUsInp{
    public static void main(String[] args) {
        Scanner n = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int num1 = n.nextInt();
        System.out.print("Enter the second number:");
        int num2 = n.nextInt();
        System.out.println(num1+"+"+num2+"="+(num1+num2));
    }
}