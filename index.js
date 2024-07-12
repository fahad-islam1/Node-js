const fs =require("fs")

// two methods for creating file


fs.writeFile('assignments.txt', 'This is my file system assignment ', (error)=>{
    if(error) throw error;
    console.log('File has been created!');
})
fs.writeFileSync("helo.js","somethning")



// node mon