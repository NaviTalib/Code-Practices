#include<stdio.h>
#include<stdlib.h>
int main(){
    int *ptr,i,num;
    printf("Enter number of elements:");
    scanf("%d",&num);

    //Syntax -> ptr = (cast-type*) malloc(byte-size)

    ptr = (int *)malloc(num*sizeof(int));
    if(ptr==NULL){
            printf("Memory not allocated.\n");
            exit(0);
    }
    else{
            for(i=1;i<=num;i++){
                printf("Enter %d element:",i);
                scanf("%d",&ptr[i]);
            }
            printf("You have entered these elements:\n");
            for(i=1;i<=num;i++){
                printf("Element %d = %d\n",i,ptr[i]);
            }
    }
    return 0;
}