 import java.util.Arrays;

 public class Task3 {

        public static void main(String[] args) {
            int[] nums = {1, 4, 5, 2, 8, 3, 10};

            int[] maxNumbers = findMaxProductNumbers(nums);
            int maxProduct = maxNumbers[0] * maxNumbers[1];

            System.out.println("The two numbers with maximum product are: " + maxNumbers[0] + " and " + maxNumbers[1]);
            System.out.println("The maximum product is: " + maxProduct);
        }
        public static int[] findMaxProductNumbers(int[] nums) {
            Arrays.sort(nums);

            int n = nums.length;
            // Compare the product of the extreme numbers (last two and first two after sorting)
            int product1 = nums[n - 1] * nums[n - 2];
            int product2 = nums[0] * nums[1];

            return (product1 > product2) ? new int[]{nums[n - 1], nums[n - 2]} : new int[]{nums[0], nums[1]};
        }
    }

