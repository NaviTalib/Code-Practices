//swap by value
#include<stdio.h>

void swapNum(int a, int b);

int main (){
    printf("Swaped numbers:\n");
    swapNum(5,3); //called by value
    return 0;
}
void swapNum(int a , int b){
    int t;
    t = a;
    a = b;
    b = t;
    printf(" a = %d and b = %d",a,b);
}