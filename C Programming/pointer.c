#include<stdio.h>
int main(){

    int num = 6;
    int *ptr = &num;
    printf("Value : %d\n",*ptr);

    *ptr = 87;
    printf("Modified Value : %d",num);

    return 0;
}