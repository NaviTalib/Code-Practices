public class Mobile{
    String brand;
    String model;

     void andrfeatures(){
        System.out.println("8 GB RAM and 128 GB ROM.");
    }
    void IOSfeatures(){
        System.out.println("4GB RAM and 64 GB ROM");
    }

    public static void main(String[] args) {
        Mobile m1 = new Mobile();
        m1.brand = "Samsung";
        m1.model = "M34";

        Mobile m2  = new Mobile();
        m2.brand = "Apple";
        m2.model = "Iphone XR";
        
        System.out.println(m1.brand+" "+m1.model);
        m1.andrfeatures();

        System.out.println(m2.brand +" "+m2.model);
        m2.IOSfeatures();

    }
}