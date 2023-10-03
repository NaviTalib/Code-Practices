#include<stdio.h>

int fact(int x){
    if(x<=1){
        return 1;

    }
    else{
        return x*fact(x-1);
    }

}
int main(){
    int num =5;
    int result =fact(num);
    printf("Factorial of %d = %d",num,result);
    return 0;
    
}