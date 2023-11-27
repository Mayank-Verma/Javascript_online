const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("P1 is resovled");
    },1500)
 });
 const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("P2 is resolved");
    },3000)
 });
 const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("P3 is resolved");
    },10000)
 });
 
 // function getData(){
   
 // p
 // .then((data)=>console.log(data))
 // .catch((data)=>console.log(data))
 // console.log("Suraj");
 // }
 
 async function getData()
 {
  console.log("Before await")
   const val = await p1;
   console.log(val);
   console.log("Suraj Tutorials")
   const val2 = await p2;
   console.log(val2);
   const val3 = await p3;
   console.log(val3);
 }
 
 getData();
 console.log("Testing here at 23")
 console.log("Testing here at 24")
 

 /*
1.async function allways return a promise.
2. async and await combo are used to handle promises..
3. await is a keyword which can only be used inside an async function..
4. js engine looks like it wait for promise to be resolved in async await case but it does not , it appears to be waiting.
but in actual it does not wait it suspend the function and run after the promise complete at previous point from it suspended.

*/