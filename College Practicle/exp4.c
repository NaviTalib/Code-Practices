#include <stdio.h>

void moveZerosToEnd(int arr[], int n) {
    int count = 0; // Count of non-zero elements

    // Traverse the array. If the element encountered is non-zero, then replace the element at index 'count' with this element
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i]; // here count is incremented
        }
    }

    // Now all non-zero elements are at the beginning, we can fill remaining places with 0
    while (count < n) {
        arr[count++] = 0;
    }
}

int main() {
    int arr[] = {0, 1, 0, 3, 12, 0, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    moveZerosToEnd(arr, n);
    
    printf("\nArray after moving zeros to end: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
