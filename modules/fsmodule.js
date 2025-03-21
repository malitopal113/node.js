 const fs = require('fs')
// reading file
 fs.readFile('node.json', 'utf8', (err, data) =>{
        if (err) console.log(err);
        console.log(data);
        console.log('File read successfully')
        
 })

 //writing file

 fs.writeFile('node2.json', '{"name": "mehmet ali", "surname": "topal"}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('File written successfully')
    
  })

    //appending file
    fs.appendFile('node2.json', 'this is the appended text', 'utf8', (err) => {
        if(err) console.log(err);
        console.log('File appended successfully')
        
      })
//deleting file 
setTimeout(() => {
    fs.unlink('node2.json', (err) => {
        if(err) console.log(err);
        console.log('File deleted successfully')
        
      })
}, 3000);

//create folder

fs.mkdir('newFolder/index.js', {recursive:true}, (err) => {
    if(err) console.log(err);
    console.log('Folder created successfully')   
})

//delete folder
setTimeout(() => {
    fs.rmdir('newFolder', {recursive:true}, (err) => {
        if(err) console.log(err);
        console.log('Folder deleted successfully')   
    })
}, 5000);


// delete a file

setTimeout(() => {
    fs.unlink('node.json', (err) => {
        if(err) console.log(err);
        console.log('File deleted successfully- unlink')   
    })
} , 9000);
