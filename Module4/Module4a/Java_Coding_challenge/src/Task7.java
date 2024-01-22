public class Task7 {

        public static void main(String[] args) {
            String originalString = "TestifyAutomation";
            String reversedString = reverseString(originalString);

            System.out.println("Original String: " + originalString);
            System.out.println("Reversed String: " + reversedString);
        }
        public static String reverseString(String str) {
            if (str.isEmpty()) {
                return str;
            }
            return reverseString(str.substring(1)) + str.charAt(0);
        }
    }
