public class Modifiers {
    public int x = 23;
    private String name = "ABCD";
    protected double price = 10;

    public static void main(String[] args) {
        Modifiers m1 = new Modifiers();
        System.out.println(m1.x);
        System.out.println(m1.name);
        System.out.println(m1.price);
    }

}
