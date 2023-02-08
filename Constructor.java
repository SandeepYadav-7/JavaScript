// practical no.: 12 (from notes)

class Student
{
    int id;
    String name;

    // Constructor
    Student(int i, String n) {
        id = i;
        name = n;
    }
    
    void display() {
        System.out.println("Your id is: " + id);
        System.out.println("Your name is: " + name);
        System.out.println("-------------");    
    }
}

public class Constructor
{
    public static void main(String[] args) {
        Student s1 = new Student(5, "Chirag");
        Student s2 = new Student(7, "Rahul");
        s1.display();
        s2.display();
    }
}
