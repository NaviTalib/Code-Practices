public class Mobile{
    String brand;
    String model;

     void features(){
        System.out.println("8 GB RAM and 128 GB ROM.");
    }

    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.brand = "Samsung";
        m1.model = "M34";
        
        System.out.println(m1.brand+" "+m1.model);
        m1.features();
    }
}