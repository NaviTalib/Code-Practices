#include<stdio.h>
int main(){

    int a =7;
    int *ptr = &a;
    // *ptr = *ptr * *ptr;
    printf("%d",ptr);
    return 0;
}