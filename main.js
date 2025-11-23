

let product_list=document.querySelector(".list_products");


fetch('https://dummyjson.com/products/category/smartphones')
.then(response=>response.json())
.then(data=>{

   
   data.products.forEach(element => {

     let new_div=document.createElement("div");
     new_div.classList.add("products");
    

   function getStars(rating) {
     let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += `<i class="fa-regular fa-star" id="star"></i>`; 
        }else{
             stars+=`<i class="fa-solid fa-star-half-stroke" id="star"></i>`
        }
    }
    return stars;
}

     function add_products(){
           new_div.innerHTML=`
         <p>${element.brand}</p>
         <div class="images"><img src=${element.images[2]}></div>
         <h2>${element.title}</h2>
         <p>${element.description}</p>
         <p> ${getStars(Math.round(element.rating))}</p>
          <di class="shop_now"v>
               <p>${element.price} $<p>
         <span><i class="fa-solid fa-cart-plus"></i></span>
          </div>
        
     `;
     }


       add_products();
     product_list.appendChild(new_div);

    });


}).catch(error=>{
     console.log("You have" ,error);
})



fetch('https://dummyjson.com/products/category/laptops')
.then(response=>response.json())
.then(data => {

   data.products.forEach(element => {
     let new_div = document.createElement("div");
     new_div.classList.add("products");
     
           new_div.innerHTML=`
         
         <p>${element.brand}</p>
         <div class="images"><img src=${element.images[2]}></div>
         <h2>${element.title}</h2>
         <p>${element.description}</p>
        <div class="shop_now">
               <p>${element.price} $<p>
         <span><i class="fa-solid fa-cart-plus"></i></span>
          </div>
     `;
   

     product_list.appendChild(new_div);

    });

}).catch(error=>{
     console.log("You have" ,error);
})