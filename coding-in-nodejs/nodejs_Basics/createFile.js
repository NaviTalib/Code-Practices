var fs = require('fs');
//creating a new file using appendFile() function
fs.appendFile('demo1.txt','This is a demo 2 txt file.',function(err){
    if(err) throw err;
    console.log("file created");
})

/*The fs.open() method takes a "flag" as the second argument,
 if the flag is "w" for "writing", the specified file is opened
  for writing. If the file does not exist, an empty file is created
*/

/*The fs.writeFile() method replaces the specified file and content
 if it exists. If the file does not exist, a new file,
  containing the specified content, will be created
*/

//To delete a file with the File System module, use the fs.unlink() method.The fs.unlink() method deletes the specified file

//To rename a file with the File System module,  use the fs.rename() method.The fs.rename() method renames the specified file