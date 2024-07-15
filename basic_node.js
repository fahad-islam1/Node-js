const fs =require("fs")
const http =require('http')
const data=require('./data');
const path=require('path')
// two methods for creating file


// fs.writeFile('assignments.txt', 'This is my file system assignment ', (error)=>{
//     if(error) throw error;
//     console.log('File has been created!');
// })
// fs.writeFileSync("helo.js","somethning")



// node mon

// let a =3;
// let b=4;
// if (a>b) {
//     console.log('a is greater than b');
    
// } else {
//     console.log('b is greater than a');
// }


// apis http


// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application/json' });
//     resp.write(JSON.stringify(data));
//     resp.end(); 
// }).listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

// file system
let input=process.argv;




// if (input[2]=='add') {
//     fs.writeFileSync(
//         input[3],
//         input[4]
//     )
// } else if(input[2]=='remove'){

//     fs.unlink(input[3],(eror)=>{
//         if (eror){

//             console.log(eror)
//         }else {
//             console.log('file removed')
//         }
//     })
// }

// else {
//     console.log('invalid input')
// }



//  crud operation in file system
const dripath=path.join(__dirname, 'crud')

console.log(dripath);
console.warn(dripath)

// add file 
// for (let index = 0; index < 4 ;index++) {
//     fs.writeFileSync(`${dripath}/hello_world${index}.js`,'This is an apple' )
//     console.warn(`hello_world${index}.js`, 'This is an apple')
// }
 // read file
//  for (let index = 0; index < 4 ;index++) {
//      console.warn(fs.readFileSync(`${dripath}/hello_world${index}.js`, 'utf-8'))
//  }
//   update file
//  fs.writeFileSync(`${dripath}/hello_world0.js`,'This is an updated apple' )
//  console.warn(`hello_world0.js`, 'This is an updated apple')
 
// append
// fs.append()


// remove file
// for (let index = 0; index < 4 ;index++) {
//     fs.unlink(`${dripath}/hello_world${index}.js`,(error, file)=>{
//         if (error){
//             console.warn(error)
//         }else {
//             console.warn(`file removed`, file)
//         }
//     } )
   
// }


