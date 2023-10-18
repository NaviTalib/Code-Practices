#include<stdio.h>
#include<stdlib.h>

int main(){
    int *ptr,i,n;
    printf("Enter the number of elements:");
    scanf("%d",&n);
    //syntax -> ptr = (cast-type)calloc(n,element-size)
    ptr = (int*)calloc(n,sizeof(int));
    if(ptr==NULL){
        printf("Memory not allocated!");
        exit(0);
    }
    else{
        for(i=1;i<=n;i++){
                printf("enter %d element :",i);
                scanf("%d",&ptr[i]);

        }
        printf("you have entered these elements in array:");
        for(i=1;i<=n;i++){
                printf("%d,",ptr[i]);
                
        }
    }
    return 0;
}