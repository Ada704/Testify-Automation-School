public class Task7 {
    public static void main(String[] args) {
        String[][] fruitsArray = new String[4][3];


        fruitsArray[0][0] = "lemon";
        fruitsArray[1][0] = "pineapple";
        fruitsArray[2][0] = "carrot";
        fruitsArray[3][0] = "Grapes";

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(fruitsArray[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
