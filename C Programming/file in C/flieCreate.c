#include<stdio.h>
int main(){
    FILE *fptr;
    fptr = fopen("newFile.txt","w"); //file creation
    fclose(fptr); // file close
    return 0;
}