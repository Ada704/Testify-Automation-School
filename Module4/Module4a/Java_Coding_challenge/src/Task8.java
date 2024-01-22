import java.util.Arrays;
public class Task8 {

        public static void main(String[] args) {
            int[] numbers = {4, 2, 7, 9, 1, 3, 7, 4, 2, 3, 1, 9, 5, 8, 6, 5, 8};
            sortNumbers(numbers);
            System.out.println("Sorted Numbers: " + Arrays.toString(numbers));
        }

        public static void sortNumbers(int[] arr) {
            int[] count = new int[10]; // As the range is 1 to 9

            // Count occurrences of each number
            for (int num : arr) {
                count[num]++;
            }

            int index = 0;
            // Reconstruct the array based on the count of each number
            for (int i = 1; i < 10; i++) {
                while (count[i] > 0) {
                    arr[index++] = i;
                    count[i]--;
                }
            }
        }
    }