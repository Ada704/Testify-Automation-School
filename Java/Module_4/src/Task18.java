import java.util.InputMismatchException;
import java.util.Scanner;

public class Task18 {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int age = 0;
            boolean isValidInput = false;

            while (!isValidInput) {
                try {
                    System.out.print("Enter your age: ");
                    age = scanner.nextInt();
                    isValidInput = true; // If input is valid, exit the loop
                } catch (InputMismatchException e) {
                    // Clear the scanner buffer
                    scanner.next();
                    System.out.println("Invalid input. Please enter a valid age (integer).");
                }
            }

            System.out.println("Your age is: " + age);
            scanner.close();
        }
    }

