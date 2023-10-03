//compare 3 numbers
#include<stdio.h>
 int main(){
    int x=109,y=61,z=0;
    if(x>y){
        if(x>z){
            printf("%d is greater",x);
        }
     }
      if(y>x){
        if(y>z){
            printf("%d is greater",y);
        }   
     }
      if(z>y){
        if(z>x){
            printf("%d is greater",z);
        }
     }
   
    return 0;
 }