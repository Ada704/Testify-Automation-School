public class Task1 {
    public static void main(String[] args) {
            String word = "racecar";
            int number = 10801;

            boolean wordPalindrome = isPalindrome(word);
            boolean numberPalindrome = isPalindrome(Integer.toString(number));

            System.out.println("Is 'racecar' a palindrome? " + wordPalindrome);
            System.out.println("Is '10801' a palindrome? " + numberPalindrome);
        }

        public static boolean isPalindrome(String text) {
            StringBuilder reversed = new StringBuilder(text).reverse();
            return text.equals(reversed.toString());
        }
    }
