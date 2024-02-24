import java.util.Scanner;
public class UserInput {
    public static void main(String[] args) {
    Scanner userInp = new Scanner(System.in);
    System.out.println("Enter your name: ");
    String name = userInp.nextLine(); 
    System.out.println("Hello "+name);
    }

}
