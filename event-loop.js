const fs = require('fs');

// HOW CODE GET Executed in the SINGLE THREAD MODEL


 // INITIALIZE PROGRAM

 // EXECUTE "TOP LEVEL" CODE !! MEAN'S  THE SYNCHRONOUS CODE (THE CODE OUTSIDE CALLBACKS)

 // REQUIRE MODULES

 // REGISTER EVENT CALLBACKS




setTimeout(()=> console.log("Timer 1 finised !!"),0)

setImmediate(()=>console.log("Immediate 1 finished"))

fs.readFile('./test-file.txt',(err,data)=>{
    if(err){
        console.log("err!!")
        return
    }
    console.log(data)

    console.log("--------------------------------------------------------")

    setTimeout(()=> console.log("Timer 2 finised !!"),0)

    setTimeout(()=> console.log("Timer 3 finised !!"),3000)

    setImmediate(()=>console.log("Immediate 2 finished"))

})

console.log("Hello from the top-level code!!")