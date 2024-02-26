public class Contructor {
    int age;
    String name;

    public  Contructor(){
         age = 25;
         name = "Talib";
        
    }

    public static void main(String[] args) {
        Contructor c1 = new Contructor();
        System.out.println(c1.age +" "+ c1.name);

    }
    
}
