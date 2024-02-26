public class Students {
    int age;
    String name;
    int roll_no;

    void getInfo(){
        System.out.println(this.name+" "+this.age+" "+this.roll_no);
    }

    public static void main(String[] args) {
        Students s1 = new Students();
        s1.age = 22;
        s1.name = "xyz";
        s1.roll_no=567890;
        s1.getInfo();
    }
}
