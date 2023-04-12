// file accessing packages


import * as os from 'os';
// accessing command line arguments
const [, , n1, n2] = process.argv;
const sum = (num1, num2) => {
  return num1 + num2;
};

console.log("the addition of number is", sum(+n1, +n2));

// console.log("command line argument",process. argv)

//  console.log("hi vanmathi welcome to nodejs")

// file accessing

// read a file
fs.readFile("./config.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file read successfully");
    console.log(typeof data);
    let cfg = JSON.parse(data);
    console.log(typeof(cfg));
    console.log(cfg);
  }
});

// writting the file

const content = "i am writing a new file written by node.js"

fs.writeFile("./newfile.txt",content,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file written sucessfully")
    }
})

// updation of file

const newContext = "/n new content added to this file"

fs.appendFile("./newfile.txt",newContext,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("updated sucessfully")
    }
})

// deleting the files
fs.unlink("./newfile.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted sucessfully")
    }
})

fs.readdir("./newFolder",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// os level

console.log("os version-----",os.version());
console.log("Free memory-----",os.freemem());
console.log("total memory-----",os.totalmem());
console.log("cpu-----",os.cpus());

// date & time
let time = Date.now();
console.log("timestsmp---",time);
let date = new Date();
let utc = date.toUTCString();
console.log("utc---:",utc);
let today = date.getDate();
console.log("date---:",today);
let month  = date.getMonth();
console.log("month---:",month);
let year = date.getFullYear();
console.log("year---:",year);