//swap by refrence
#include<stdio.h>

void numSwap(int *x,int *y);
int main(){

    int a = 6,b =7;
    printf("Swapped numbers:\n");
    numSwap(&a,&b); // call by refrence
    printf(" x = %d and y = %d",a,b);

    return 0;
}

void numSwap(int *x,int *y){
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}