public class Task2 {
    public static void main(String[] args) {
            String sentence = "I am the best AutomationTester";
            System.out.println("Original sentence: " + sentence);
            System.out.println("Reversed sentence: " + reverseWords(sentence));
        }
        public static String reverseWords(String sentence) {
            if (sentence.isEmpty()) {
                return sentence;
            }

            int spaceIndex = sentence.indexOf(' ');

            if (spaceIndex == -1) {
                return sentence;
            } else {
                String firstWord = sentence.substring(0, spaceIndex);
                String restOfSentence = sentence.substring(spaceIndex + 1);
                return reverseWords(restOfSentence) + " " + firstWord;
            }
        }
}
