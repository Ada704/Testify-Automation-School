 import java.util.*;

 public class Task5 {
     public static void main(String[] args) {
            String[] input = {"akka", "akak", "baab", "baba", "bbaa"};
            Map<String, List<String>> anagramMap = createAnagramBuckets(input);

            // Display the anagram buckets
            for (List<String> bucket : anagramMap.values()) {
                System.out.println("Anagram Bucket: " + bucket);
            }
        }
        public static Map<String, List<String>> createAnagramBuckets(String[] words) {
            Map<String, List<String>> anagramMap = new HashMap<>();

            for (String word : words) {
                String key = getKey(word);
                if (!anagramMap.containsKey(key)) {
                    anagramMap.put(key, new ArrayList<>());
                }
                anagramMap.get(key).add(word);
            }

            return anagramMap;
        }

        public static String getKey(String word) {
            int[] count = new int[26]; // Assuming lowercase English letters

            for (char c : word.toCharArray()) {
                count[c - 'a']++;
            }

            StringBuilder key = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                if (count[i] > 0) {
                    key.append((char) ('a' + i)).append(count[i]);
                }
            }

            return key.toString();
        }
    }
