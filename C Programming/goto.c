#include<stdio.h>
int main(){

    int num,i=1;
    printf("Enter a number to print Table:");
    scanf("%d",&num);
    table :
    printf("%d x %d = %d\n",num,i,num*i);
    i++;
    if(i<=10)
    goto table;
    return 0;
}