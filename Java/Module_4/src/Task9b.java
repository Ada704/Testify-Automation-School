import java.util.Scanner;

public class Task9b {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String userInput;

        do {
            System.out.print("Enter 'testify': ");
            userInput = scanner.nextLine();
            if (!userInput.equalsIgnoreCase("testify")) {
                System.out.println("Try again!");
            }
        } while (!userInput.equalsIgnoreCase("testify"));

        System.out.println("You entered 'testify'. awesome!");
        scanner.close();
    }
}
