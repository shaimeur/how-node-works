const EventEmitter = require("events") // requering the EventEmitter class

const http = require("http");

const port = 8000 ;
const server = http.createServer();
class Sales extends EventEmitter {
    constructor(){
        super()
    }
}
const myEmitter = new Sales(); // making an instance of the EventEmitter class


/* creating the listner by calling the instance of the EventEmitter class and
we are listening to the (newSale) event (we can put any event we like )
 we used the on method and passing the event and the callback function  */


myEmitter.on("newSale",()=>{
    console.log("New sale have been made !!")
})

myEmitter.on("newSale",()=>{
    console.log("Customer Name : Koffi !!")
})
myEmitter.on("newSale",(stock)=>{
    console.log("the rest of the stock is : " + stock)
})

// calling the instance of the listner with the emit method
myEmitter.emit("newSale",9)


server.on("request",(req,res)=>{
  console.log(' request receved !!')
  console.log(req.url)
  res.end("Request receved !")
})
server.on("request",(req,res)=>{
  console.log("Another  Request receved !")
})
server.on('close',()=>{
    console.log('server closed')
})
server.listen(port,'127.0.0.1',()=>{
  console.log('waiting for requests  on port : ' + port)
})