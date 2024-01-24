const EventEmitter = require("events") // requering the EventEmitter class


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

// calling the instance of the listner with the emit method
myEmitter.emit("newSale")