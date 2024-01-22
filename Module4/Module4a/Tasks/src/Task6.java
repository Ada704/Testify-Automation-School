public class Task6 {
    public static void main(String[] args) {
        String word = "DEMOCRACY";
        String reversedString = new StringBuilder(word).reverse().toString();

        String extractedWord = reversedString.substring(reversedString.indexOf("COME"), reversedString.indexOf("COME") + 4);

        System.out.println("Reversed string: " + reversedString);
        System.out.println("Extracted word: " + extractedWord);
    }
}
