public class MethodInClass {
    static void myStatic(){
        System.out.println("This is a static method, No need to create object.");

    }
    public  void myPublic() {
        System.out.println("This is a Public method and needs an Object of the Class to be called");
    }

    public static void main(String[] args) {
        myStatic();

        MethodInClass m1 = new MethodInClass();
        m1.myPublic();
    }
}
