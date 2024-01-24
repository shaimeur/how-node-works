const fs = require('fs');

const crypto = require('crypto')

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 100

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

    console.log("-----------------------------------------------------------------")

    setTimeout(()=> console.log("Timer 2 finised !!"),0)

    setTimeout(()=> console.log("Timer 3 finised !!"),3000)
    setTimeout(()=> console.log("Timer 4 finised !!"),6000)

    setImmediate(()=>console.log("Immediate 2 finished"))

    // process.nextTick(()=>console.log("Process nextTick"))

    crypto.pbkdf2("password" , 'salt' ,100000 , 1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
        console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
        console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
        console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })

    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })
    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })


    crypto.pbkdf2("password" , 'salt' ,100000,1024,'sha512' , ()=> {
      console.log('password encrypted !! in  ' + (Date.now() - start)/1000 + " second!!" )
    })

})

console.log("Hello from the top-level code!!")