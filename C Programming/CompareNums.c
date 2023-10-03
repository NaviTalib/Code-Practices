//comapring two nums
#include<stdio.h>

int main(){
    int x,y;
    printf("Enter two numbers for comapre:\n");
    scanf("%d%d",&x,&y);
    if(x>y){
        printf("%d is greater than %d",x,y);
    }
    else{
    printf("%d is greater than %d",y,x);

    }
    return 0;
}

