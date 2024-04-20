const fs = require('fs');
const { fileURLToPath } = require('url');
// console.log('read start');

// Asynchronous way to read file.
// fs.readFile('input.txt', function (err, data) {
//   if(err) {
//     console.log('Error:', err);
//     return err;
//   }
//   console.log('Data:', data.toString());
//   console.log('read end');
//   return data;
// });

// console.log('other stuff');


// synchronous way to read file\

// var data = fs.readFileSync('input.txt');
// console.log('Data', data.toString());
// console.log('Read End');
// console.log('Other Stuff'); 

//  Read > Open  + Read

// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function (err, fd){
//    if(err){
//     console.log('Eroor in opning file: ', err);
//    }
//    console.log("file open successfully!");

//    fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
//     if(er){
//       console.log("Error in reading file ");
//     }
//     console.log("Data: ", bytes.toString());
//     console.log("Data: ", buf.slice(0, bytes).toString());
//    })
//    fs.close(fd, function (err){
//     if(err){
//       console.log('Error in closing file');
//     }else {
//       console.log('Success in closing file');
//     }
//    })
// })

// Write file

// fs.writeFileSync('input.txt', 'Pw Skills', function (err){
//   if(err){
//     console.log("Enter in writing file!");
//   }else {
//     console.log("Success in writing file!");
//   }
// });

// Appending to file 

// fs.appendFileSync('input.txt', ' -- Rajnish Pandey', 'utf8', function(err){
//     if(err){
//     console.log("Enter in appending file!");
//   }else {
//     console.log("Success in appending file!");
//   }
// })


// Deleting file

// fs.unlink('input.txt', function(err){
//   if(err){
//     console.log('Error in deleting file!');
//   }else {
//     console.log('Success in deleting file!');
//   }
// })