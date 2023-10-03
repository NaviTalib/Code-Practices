//taking input of array from user,

#include<stdio.h>

int main(){

    int sizeofArray,i;
    printf("Enter size of array:");
    scanf("%d",&sizeofArray);
    int arr[sizeofArray];
    printf("Enter Elements one by one:-\n");
    for(i=0;i<sizeofArray;i++){
        scanf("%d",&arr[i]);
    }
    printf("You Entered These elements in Array:\n");
    for(i=0;i<sizeofArray;i++){
        printf("%d\n",arr[i]);
    }


    return 0;
}