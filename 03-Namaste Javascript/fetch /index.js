async function dataFetch() {
    const response= await fetch("https://api.github.com/users/mayank-verma");
    const data= response.json();
    setTimeout(()=>{
        console.log(data);
    },2000)
    
}
dataFetch();