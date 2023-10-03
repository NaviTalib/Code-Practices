//two dimensional array
#include<stdio.h>
 int main(){
    
    int i,j;
    int x[2][2]={{8,5},{4,2}};
    // printf("%d",x[1][1]);
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
          printf("x[%d][%d]=%d ",i,j,x[i][j]);  
        }
        printf("\t\n");
    }

    return 0;
 }