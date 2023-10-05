#include<stdio.h>
int main(){
    FILE *fptr;
    fptr = fopen("newFile.txt","w"); //file open for writting
    fprintf(fptr,"Hello Programming World !");
    fclose(fptr); // file close
    return 0;
}