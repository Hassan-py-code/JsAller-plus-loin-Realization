

let product_list=document.querySelector(".list_products");

let all_products=[];


fetch('https://dummyjson.com/products/category/smartphones')
.then(response=>response.json())
.then(data=>{

   all_products.push(...data.products);
    products_func(all_products);
       

}).catch(error=>{
     console.log("You have" ,error);
})

fetch('https://dummyjson.com/products/category/laptops')
.then(response=>response.json())
.then(data => {

    all_products.push(...data.products);
    products_func(all_products);
 

}).catch(error=>{
     console.log("You have" ,error);
})


// create function
function products_func(add_products){

    product_list.innerHTML="";
    add_products.forEach(element => {
           let star="";
           for (let index = 1; index <= 5; index++) {
                if(index<Math.round(element.rating)) {
                     star+=`<i class="fa-regular fa-star" id="star"></i>`;
                }else{
                     star+=`<i class="fa-solid fa-star-half-stroke" id="star"></i>`;
                }
           }
        
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
        <p>${star}</p>
      
     `;
      
     product_list.appendChild(new_div);

    });
}


document.querySelectorAll(".name_smartphone a").forEach(link => {
       link.addEventListener("click",(event)=>{
        event.preventDefault();

     let brand=event.target.id;

     let filter_brand = all_products.filter( p => p.brand.toLowerCase() === brand.toLowerCase());

     products_func(filter_brand);

        if (brand === "all") {
            products_func(all_products);
            return; 
        };

});

});
