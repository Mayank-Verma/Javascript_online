const cart=['chole','bhature','pizza','masala dosa','nutri kulcha','lassi','kadhai paneer','butter roti'];

function createOrder(cart){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          const orderId="abc-def-ghi-123";
        //   const orderId="";
           console.log("Order created withe order Id: ",orderId);
           resolve(orderId);
       },3000)
    })
}

function proceedToPayment(orderId){
     return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           if(orderId){
           console.log("Payment successfull!");
           resolve(orderId);
           }
           else 
           reject("Order creation Failed!!!")
       },3000)
    })
}

function showOrderSummary(orderId){
 console.log("Order recieved for OrderId: ",orderId);
}



createOrder(cart)
.then(proceedToPayment)
.then(showOrderSummary)
.catch((data)=>{
    console.log(data);
})
