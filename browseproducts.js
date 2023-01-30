
   
   let data=[];

   let resultsRootElement = document.querySelector(".products")
 
 

     function displayData(){
        if(localStorage.getItem('products')){
              products = JSON.parse(localStorage.getItem('products'))
              data = products
             console.log(data)
          }
      }
      displayData()

 
    document.querySelector("#searchinput").addEventListener("keyup", ()=>{
 
        let searchTerm = document.querySelector("#searchinput").value;
        let resultsArrey = [];
           
        if(String(searchTerm).trim().length > 0){
         resultsArrey = data.filter(product => String(product.title).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
         renderProducts(resultsArrey)
         console.log(resultsArrey)

         document.querySelector(".pricelessthan").addEventListener("keyup", ()=> {
            let lessthan = document.querySelector(".pricelessthan").value
             filterArrey = resultsArrey.filter(product =>  Number(product.price) <= lessthan );
             renderProducts(filterArrey)
             console.log(filterArrey)
         })

         document.querySelector(".pricegreaterthan").addEventListener("keyup", ()=> {
            let greaterthan = document.querySelector(".pricegreaterthan").value
             filterArrey = resultsArrey.filter(product =>  Number(product.price) >= greaterthan );
             renderProducts(filterArrey)
             console.log(filterArrey)
         })          


        }        
        else{
         document.querySelectorAll(".result").forEach(prod =>{
             prod.remove();
         })
        }
 
     })


     //      Sorting data  by price, discount, a to z  and z to a     ///

     document.querySelector("#SelectItem").addEventListener("change", () => {

        let myoption = document.querySelector("#SelectItem") 
        let sortedata = []     
        alert("filtering products by " + myoption.value)

        if(myoption.value === "price")
         {
             sortedata = data.sort((a, b) => {  return a.price - b.price;    });
            renderProducts(sortedata)            
         }

         else if(myoption.value == "discount")
         {           
            sortedata = data.sort((a, b) => {  return a.discount - b.discount;    });
           renderProducts(sortedata)          
         }

         else if(myoption.value == "atoz")
         {
           sortedata = data.sort(function(a,b){ return a.title.localeCompare(b.title);   })
           renderProducts(sortedata)          
         }
         else if(myoption.value == "ztoa")
         {
             sortedata = data.sort( function(a,b) {return  b.title.localeCompare(a.title) })
             renderProducts(sortedata)
         }

     })



     //              Filter By Category                //

     document.querySelector(".grocery").addEventListener("click", () => {    
       let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "sports"  )
       renderProducts(category)
       console.log(category)        
     })
     
     document.querySelector(".bags").addEventListener("click", () => {    
        let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "footwear"  )
        renderProducts(category)
        console.log(category)        
      })

      document.querySelector(".electronics").addEventListener("click", () => {    
        let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "electronics"  )
        renderProducts(category)
        console.log(category)        
      })

      document.querySelector(".shirts").addEventListener("click", () => {    
        let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "shirts"  )
        renderProducts(category)
        console.log(category)        
      })

      document.querySelector(".pants").addEventListener("click", () => {    
        let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "pants"  )
        renderProducts(category)
        console.log(category)        
      })

      document.querySelector(".officesupplies").addEventListener("click", () => {    
        let category = data.filter(product =>  String(product.category.toLocaleLowerCase())  ==  "officesupplies"  )
        renderProducts(category)
        console.log(category)        
      })



      

     function renderProducts(products){
       document.querySelectorAll(".result").forEach(prod =>{
            prod.remove();
        })
 
         products.forEach(product =>{
             renderSingleProduct(product);
         })
     }
     

     var cart = [];
     
function renderSingleProduct(product){
 
    let resultDiv = document.createElement("div")
    let resultImg = document.createElement("img") 
    let resultTitle = document.createElement("h3")           
    let resultPrice = document.createElement("h4")
    let resultDiscount = document.createElement("span")
    let purchaseButton = document.createElement("button")
    purchaseButton.setAttribute("class", "AddToCart")
    

       let i = 0;
       let productPrice = product.price
    
    purchaseButton.addEventListener("click", ()=> { 

      a = ++i
      let item = {
        name: product.title,
        price: productPrice * a,
        size: a,
        id: product.UniqueID
      }
      
      if( item.id === product.UniqueID){
        console.log(product.UniqueID)
        addToLocalStorage(item)
      }
      else{ 
        alert(" uniqueid is not matched! ")
      }
    
   
    })    
    
    resultImg.src = product.imageurl;
    resultTitle.innerText = product.title;
    resultPrice.innerText = "₹" + product.price +"/-"    
    resultDiscount.innerText =  "(" + product.discount +"% Off)"
    purchaseButton.innerText ="Add to Cart +";

    resultDiv.appendChild(resultImg)
    resultDiv.appendChild(resultTitle)
    resultDiv.appendChild(resultPrice)
    resultPrice.appendChild(resultDiscount)
    resultDiv.appendChild(purchaseButton)
    resultDiv.className = "result";
   
   resultsRootElement.appendChild(resultDiv) 
     
}

function addToLocalStorage(item){

  item= {...item}

  cart.push(item)
  localStorage.setItem("cart", JSON.stringify(item))

}

 













 
 
 