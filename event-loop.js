const fs = require('fs');

// HOW CODE GET Executed in the SINGLE THREAD MODEL


 // INITIALIZE PROGRAM

 // EXECUTE "TOP LEVEL" CODE !! MEAN'S  THE SYNCHRONOUS CODE (THE CODE OUTSIDE CALLBACKS)

 // REQUIRE MODULES

 // REGISTER EVENT CALLBACKS




setTimeout(()=> console.log("Timer one finised !!"),0)

setImmediate(()=>console.log("Immediate 1 finished"))

fs.readFile('./test-file.txt',(err,data)=>{
    if(err){
        console.log("err!!")
        return
    }
    console.log(data)
})

console.log("Hello from the top-level code!!")