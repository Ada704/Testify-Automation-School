import java.util.Scanner;

public class Task10 {
    public static void main(String[] args) {
        verifyVisitors();
    }
    public static void verifyVisitors() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your message: ");
        String userMessage = scanner.nextLine();

        if (userMessage.equalsIgnoreCase("Testify")) {
            System.out.println("Welcome! You are joining for Testify Trainings.");
        } else {
            System.out.println("Sorry, you are not joining for Testify Trainings.");
        }

        scanner.close();
    }
}
