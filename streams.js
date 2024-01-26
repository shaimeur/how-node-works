const fs = require('fs');

const server = require('http').createServer();

const port = 9000

// Solution with readFile method
// server.on('request',(req,res)=>{
//     fs.readFile('./test-file.txt','utf-8',(err,data)=>{
//         if(err){
//           console.log('err',err )
//           return
//         }
//         console.log(data.length)
//         res.end(data)
//     })

// })


// Streams
// server.on('request',(req,res)=>{
//     const readabel = fs.createReadStream('./test-file.txt')
//     readabel.on('data',chunck=>{
//         res.write(chunck)
//     });
//     readabel.on("end",()=>{
//         res.end();
//     });
//     readabel.on("error",err=>{
//         console.log(err)
//         res.statusCode = 500
//         res.end("Page not found!")
//     })
// })

server.on('request',(req,res)=>{
   const readabel = fs.createReadStream('./test-file.txt')
    readabel.pipe(res)
    // this solution is the best one we got a readabel.pipe(writable)
})

server.listen(port,'127.0.0.1',()=>{
    console.log("server is listning on port : " + port)
})