const ticket =new Promise((resolve,reject)=>{
    const isBoarded=false;
    if(isBoarded===true)
    resolve('You successfully onboarded on the flight');
else
 reject('We apologize flight got cancelled!');
 

});

ticket.then((data)=>console.log(data))
.catch(data=>console.log(data))
.finally(()=>console.log("We are always with you!"))