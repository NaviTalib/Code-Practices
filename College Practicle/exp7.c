#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// Structure to represent queue
struct Queue {
    int arr[MAX_SIZE];
    int front, rear;
};

// Function to initialize the queue
void initialize(struct Queue *queue) {
    queue->front = -1;
    queue->rear = -1;
}

// Function to check if queue is empty
int isEmpty(struct Queue *queue) {  
    return (queue->front == -1);
}

// Function to check if queue is full
int isFull(struct Queue *queue) {
    return (queue->rear == MAX_SIZE - 1);
}

// Function to enqueue an element
void enqueue(struct Queue *queue, int value) {
    if (isFull(queue)) {
        printf("Queue Overflow\n");
        return;
    }
    if (isEmpty(queue))
        queue->front = 0;
    queue->rear++;
    queue->arr[queue->rear] = value;
    printf("Enqueued element: %d\n", value);
}

// Function to dequeue an element
int dequeue(struct Queue *queue) {
    if (isEmpty(queue)) {
        printf("Queue Underflow\n");
        exit(1);
    }
    int value = queue->arr[queue->front];
    if (queue->front == queue->rear) { // If only one element
        initialize(queue);
    } else {
        queue->front++;
    }
    return value;
}

// Function to display the elements of the queue
void display(struct Queue *queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\n");
        return;
    }
    printf("Queue elements: ");
    for (int i = queue->front; i <= queue->rear; i++) {
        printf("%d ", queue->arr[i]);
    }
    printf("\n");
}

int main() {
    struct Queue queue;
    initialize(&queue);

    enqueue(&queue, 20);
    enqueue(&queue, 30);
    enqueue(&queue, 10);

    display(&queue);

    printf("Dequeued element: %d\n", dequeue(&queue));
    display(&queue);

    return 0;
}
