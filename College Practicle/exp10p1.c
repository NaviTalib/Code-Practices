#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int size;
} BinaryTreeArray;

void insertArray(BinaryTreeArray *tree, int value) {
    if (tree->size == MAX_SIZE) {
        printf("Tree is full\n");
        return;
    }
    tree->data[tree->size] = value;
    tree->size++;
}

void printTreeArray(BinaryTreeArray *tree) {
    for (int i = 0; i < tree->size; i++) {
        printf("%d ", tree->data[i]);
    }
    printf("\n");
}

int main() {
    BinaryTreeArray tree;
    tree.size = 0;

    insertArray(&tree, 10);
    insertArray(&tree, 5);
    insertArray(&tree, 20);
    insertArray(&tree, 3);
    insertArray(&tree, 7);
    insertArray(&tree, 15);
    insertArray(&tree, 25);

    printf("Binary Tree (Array): ");
    printTreeArray(&tree);

    return 0;
}
