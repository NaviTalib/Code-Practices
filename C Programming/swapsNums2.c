#include<stdio.h>
int main(){
    int One = 66,two =88;
    printf("Before swapping One = %d and two = %d\n",One,two);
    One = One+two;
    two = One-two;
    One = One-two;
    printf("After swapping One = %d and two = %d\n",One,two);

     return 0;
}