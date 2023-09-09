document.addEventListener('DOMContentLoaded', function() {
    let users = document.querySelector('.users');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < response.length; i++) {
              
                users.innerHTML += `
       <div class="user">
           <img src="${response[i].avatar}" alt="${
          response[i].email
        }" class="user-img">
           <div class="user-content"> 	
			 <h4  class="user-email"> useremail: ${response[i].email} </h4>		   
             <h4 class="user-role"> usererole: ${response[i].role}</h4>
             <h4 class="user-password"> userpassword: ${response[i].password}</h4>           
           </div>
          
       </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts('https://api.escuelajs.co/api/v1/users');
});
