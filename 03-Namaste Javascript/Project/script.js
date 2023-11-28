const cardContainer=document.getElementById("image-card");
const searchForm=document.querySelector(".d-flex");

async function fetchingData(data){
    const response=await fetch(`https://dummyjson.com/products/search?q=${data}`)
    const result=await response.json();
    showData(result.products[0])
}

function showData(result){
    console.log(result);
    const innerDiv=`<div class="card" style="width: 18rem;">
     
    <div id="carouselExampleIndicators" class="carousel slide card-img-top" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src=${result.images[0]} alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=${result.images[1]} alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=${result.images[2]} alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    <div class="card-body">
      <h5 class="card-title">${result.title}</h5>
      <p class="card-text">${result.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

  cardContainer.insertAdjacentHTML("beforeend",innerDiv)
 
}

searchForm.addEventListener('submit',function(e){
 const data=e.target[0].value;
 fetchingData(data);

})