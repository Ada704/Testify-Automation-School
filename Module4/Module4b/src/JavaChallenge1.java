public class JavaChallenge1 {
    public static void main(String[] args) {
        String racecar = "racecar";
        int number = 10801;

        System.out.println("Is 'racecar' a palindrome? " + palindromes(racecar));
        System.out.println("Is 'number' a palindrome? " + palindromes(Integer.toString(number)));
    }

    public static boolean palindromes(String type) {
        StringBuilder reverse = new StringBuilder(type).reverse();
        return type.equalsIgnoreCase(reverse.toString());
    }
}

