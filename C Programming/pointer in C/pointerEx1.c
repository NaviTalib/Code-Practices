#include<stdio.h>
int main(){
    int a = 5;
    int *j;
    j = &a;
    printf("Address of a = %u\n",&a);
    printf("Value of a = %d\n",a);
    printf("Value of a = %d\n",*(&a));
    printf("Address of j = %u\n",&j);
    printf("Value of j = %d",*j);
    return 0;
}