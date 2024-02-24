import java.util.Scanner;
public class MyArray {
    public static void main(String[] args) {
    //    int newArray[] ={1,5,8,7,3};
    //    System.out.println(newArray[0]);

        
        Scanner scn=new Scanner(System.in);
        System.out.println( "Enter the size of array:");
        int size = scn.nextInt();

        int newArray[] = new int[size];

        for(int i =0;i<size;i++){
            System.out.print("Enter element "+(i+1)+": ");
            newArray[i] = scn.nextInt();
        }
        System.out.println("Your entered elements are :");
        for(int i=0;i<size;i++){
            System.out.println(newArray[i]);
        }

}
}
