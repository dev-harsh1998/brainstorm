import java.util.Scanner;

class solutionDay1 {

    public static void main(String[] args) {

        // Declaring variables
        int[][] matrix = new int[3][3];
        int i, j, sumLeftDiagonal = 0, sumRightDiagonal = 0;

        // Calling scanner class
        Scanner scan = new Scanner(System.in);

        // Try and finally to close scan variable if needed
        try {
            System.out.print("Enter the elements of 3x3 matrix: ");

            // Take input of row and column
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    matrix[i][j] = scan.nextInt();
                }
            }
        } finally {
            scan.close();
        }
        System.out.println("");
        System.out.println("========================");
        System.out.println("");

        // Print the matrix elements
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                System.out.print(matrix[i][j] + "\t");
            }

            System.out.println();
        }

        // Scan through matrix to find sum of left and right diagonal
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (i == j) {
                    sumLeftDiagonal = sumLeftDiagonal + matrix[i][j];
                }

                if (i == 3 - j - 1) {
                    sumRightDiagonal = sumRightDiagonal + matrix[i][j];
                }
            }
        }

        // Print all the solutions
        System.out.println("");
        System.out.println("========================");
        System.out.println("");
        System.out.println("Sum of left diagonal: " + sumLeftDiagonal);
        System.out.println("Sum of right diagonal: " + sumRightDiagonal);

        // Check which diagonal is greater and print the answer accordingly as the question says "Answer should always be >= 0"
        if (sumLeftDiagonal > sumRightDiagonal) {
            System.out.println("Subtraction of sum of left and right diagonals: " + (sumLeftDiagonal - sumRightDiagonal));
        }
        else{
            System.out.println("Subtraction of sum of left and right diagonals: " + (sumRightDiagonal - sumLeftDiagonal));
        }
    }
}