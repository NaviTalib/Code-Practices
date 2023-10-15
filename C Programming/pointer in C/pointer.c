#include<stdio.h>
int main(){
    int num = 55;
    int *ptr = &num;
    printf("Address of variable ptr = %d    \n",ptr);
    printf("value of variable ptr = %d",*ptr);
    return 0;
}