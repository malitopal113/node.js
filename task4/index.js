const fs = require('fs');

// Create file

fs.writeFile('employees.json', '[{"name":"Employee 1 Name","salary":2000},', 'utf-8', (err) => {
    if (err) console.log('error');
    else console.log('File created successfully');
})

// read file    

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log('error');
    else console.log(data);
})

// update file

fs.appendFile('employees.json', '{"name":"Employee 2 Name","salary":3000}]', 'utf-8', (err) => {
    if (err) console.log('error');
    else console.log('File updated successfully');
})
// again read file
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log('error');
    else console.log(data);
})

// delete file

setTimeout(() => {  
    fs.unlink('employees.json', (err) => {
        if (err) console.log('error');
        else console.log('File deleted successfully');
    })
}, 5000);