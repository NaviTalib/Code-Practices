#include<stdio.h>
int main(){
    int num = 23;
    int *p = &num;
    printf("Address of p variable = %u\n",p);
    p=p+1;
    printf("Address of p after increment = %u",p);
    return 0;
}