public class JavaChallenge2 {
    public static void main(String[] args) {
        String word = "I am the best Automation Tester";
        String reversedWord = reversedNew(word);
        System.out.println("Reversed sentence: " + reversedWord);
    }
    public static String reversedNew(String word) {
        if (word.isEmpty()) {
            return word;
        }
            int index = word.indexOf(' ');
            if (index == -1) {
                return word;
            }

            String firstWord = word.substring(0, index);
            String remainingWords = word.substring(index + 1);

            return reversedNew(remainingWords) + " " + firstWord;
        }
    }