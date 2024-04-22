package resources;

public class SimpleProgram {
    
    public static void main(String[] args) {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(5);
    }
    
    public void runProgram(int number) {
        if (number > 0) {
            for (int i = 0; i < number; i++) {
                if (i % 2 == 0) {
                    System.out.println(i + " is even");
                } else {
                    System.out.println(i + " is odd");
                }
            }
        } else {
            System.out.println("Number must be positive");
        }
    }
}

