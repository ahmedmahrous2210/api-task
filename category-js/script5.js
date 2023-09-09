document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < response.length; i++) {
              
                products.innerHTML += `
       <div class="product">
           <img src="${response[i].images[1]}" alt="${
          response[i].category.name
        }" class="product-img">
           <div class="product-content">
         
           <h4 class="product-category">${response[i].category.name}</h4>
          
           
           </div>
          
       </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts('https://api.escuelajs.co/api/v1/categories/5/products');
});
