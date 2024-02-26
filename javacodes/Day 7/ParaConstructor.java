public class ParaConstructor {
    int  id;
    String name;
    public ParaConstructor(int  i,String n){
        id = i;
        name = n;
    }

    public static void main(String[] args) {
        ParaConstructor pc1 = new ParaConstructor(1224, "navicodes");
        System.out.println(pc1.id+" "+pc1.name); //prints: 
    }
}
