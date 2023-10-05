#include<stdio.h>
int main(){
    FILE *fptr;
    fptr = fopen("newFile.txt","r"); //file open in read mode

    char fileData[50]; // store content of file

    fgets(fileData,18,fptr); //read content and store in variable 

    printf("%s",fileData); // print file data

    fclose(fptr); // file close
    return 0;
}