#include <stdio.h>

#define ROW 3
#define COL 3

int isSparse(int matrix[ROW][COL]) {
    int count = 0; // Count of non-zero elements

    // Count non-zero elements
    for (int i = 0; i < ROW; i++) {
        for (int j = 0; j < COL; j++) {
            if (matrix[i][j] != 0) {
                count++;
            }
        }
    }

    // Determine if matrix is sparse based on the count of non-zero elements
    if (count < (ROW * COL) / 2) {
        return 1; // Sparse matrix
    } else {
        return 0; // Not sparse matrix
    }
}

int main() {
    int matrix[ROW][COL] = {{0, 0, 0},
                            {0, 5, 0},
                            {0, 0, 0}};

    printf("The matrix is:\n");
    for (int i = 0; i < ROW; i++) {
        for (int j = 0; j < COL; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    if (isSparse(matrix)) {
        printf("The matrix is sparse.\n");
    } else {
        printf("The matrix is not sparse.\n");
    }

    return 0;
}
