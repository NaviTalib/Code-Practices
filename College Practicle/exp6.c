#include <stdio.h>
#include <stdlib.h>

// Define a structure for a node in the linked list
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the linked list
struct Node* insertAtBeginning(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    newNode->next = head;
    return newNode;
}

// Function to insert a node at the end of the linked list
struct Node* insertAtEnd(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    if (head == NULL) {
        return newNode;
    }
    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
    return head;
}

// Function to delete a node with a given key from the linked list
struct Node* deleteNode(struct Node* head, int key) {
    struct Node* current = head;
    struct Node* prev = NULL;

    // If the node to be deleted is the first node
    if (current != NULL && current->data == key) {
        head = current->next;
        free(current);
        return head;
    }

    // Search for the key to be deleted, keep track of the previous node as we need to change 'next' of the previous node
    while (current != NULL && current->data != key) {
        prev = current;
        current = current->next;
    }

    // If key was not present in the linked list
    if (current == NULL) {
        printf("Key not found\n");
        return head;
    }

    // Unlink the node from linked list
    prev->next = current->next;
    free(current);
    return head;
}

// Function to display the linked list
void display(struct Node* head) {
    struct Node* current = head;
    printf("Linked List: ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

// Function to search for a key in the linked list
void search(struct Node* head, int key) {
    struct Node* current = head;
    int position = 1;
    while (current != NULL) {
        if (current->data == key) {
            printf("Key %d found at position %d\n", key, position);
            return;
        }
        current = current->next;
        position++;
    }
    printf("Key %d not found\n", key);
}

int main() {
    struct Node* head = NULL;
    int choice, data, key;
    struct Node* temp; // Declaration moved outside the switch statement

    while (1) {
        printf("\nMenu:\n");
        printf("1. Insert at beginning\n");
        printf("2. Insert at end\n");
        printf("3. Delete node\n");
        printf("4. Display\n");
        printf("5. Search\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter data to insert at beginning: ");
                scanf("%d", &data);
                head = insertAtBeginning(head, data);
                break;
            case 2:
                printf("Enter data to insert at end: ");
                scanf("%d", &data);
                head = insertAtEnd(head, data);
                break;
            case 3:
                printf("Enter key to delete: ");
                scanf("%d", &key);
                head = deleteNode(head, key);
                break;
            case 4:
                display(head);
                break;
            case 5:
                printf("Enter key to search: ");
                scanf("%d", &key);
                search(head, key);
                break;
            case 6:
                // Free memory
                while (head != NULL) {
                    temp = head;
                    head = head->next;
                    free(temp);
                }
                exit(0);
            default:
                printf("Invalid choice\n");
        }
    }

    return 0;
}
