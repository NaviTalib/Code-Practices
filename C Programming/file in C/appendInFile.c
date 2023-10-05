#include<stdio.h>
int main(){
    FILE *fptr;
    fptr = fopen("newFile.txt","a"); //file open in append mode
    fprintf(fptr,"\n Today is new Learning Day.");
    fclose(fptr); // file close
    return 0;
}